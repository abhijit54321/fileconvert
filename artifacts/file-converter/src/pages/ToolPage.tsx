import React, { useCallback, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { 
  FileUp, X, Settings2, Download, RefreshCcw, 
  CheckCircle2, FileWarning, Loader2, ArrowRight,
  FileText
} from 'lucide-react';
import { getToolBySlug, tools } from '../lib/tools';
import { useFileConverter } from '../hooks/useFileConverter';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card, CardContent } from '../components/ui/card';
import { SEOHead } from '../components/SEOHead';
import { AdPlaceholder } from '../components/AdPlaceholder';

export default function ToolPage() {
  const [, params] = useRoute('/tools/:slug');
  const slug = params?.slug || '';
  const tool = getToolBySlug(slug);
  
  const [outputFormat, setOutputFormat] = useState(tool?.outputFormats[0] || '');
  const [quality, setQuality] = useState([80]);
  
  const { 
    state, file, progress, errorMessage, 
    handleFileSelect, clearFile, convert, downloadResult, reset
  } = useFileConverter(slug);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileSelect(acceptedFiles[0]);
    }
  }, [handleFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: tool?.inputFormats.reduce((acc, format) => {
      // Simplified accept logic for dropzone
      if (format.startsWith('.')) {
        if (!acc['application/octet-stream']) acc['application/octet-stream'] = [];
        acc['application/octet-stream'].push(format);
      } else {
        acc[format] = [];
      }
      return acc;
    }, {} as Record<string, string[]>),
  });

  const handleConvert = () => {
    convert({
      outputFormat: outputFormat,
      quality: quality[0]
    });
  };

  if (!tool) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Tool not found</h1>
        <p className="text-muted-foreground mb-8">The tool you're looking for doesn't exist or has been moved.</p>
        <Link href="/tools"><Button>View all tools</Button></Link>
      </div>
    );
  }

  const relatedTools = tools
    .filter(t => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-muted/20 pb-24">
      <SEOHead 
        title={`${tool.name} — Free Online Converter | FileConvert`}
        description={tool.description}
      />
      
      {/* Header */}
      <div className="bg-background border-b border-border py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{tool.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{tool.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-8">
        <AdPlaceholder />
        
        {/* Main Work Area */}
        <div className="bg-card border rounded-2xl shadow-sm overflow-hidden my-8">
          
          <AnimatePresence mode="wait">
            
            {/* IDLE STATE */}
            {state === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 md:p-16"
              >
                <div 
                  {...getRootProps()} 
                  className={`
                    border-3 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer
                    ${isDragActive ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/30'}
                  `}
                >
                  <input {...getInputProps()} data-testid="input-file-upload" />
                  <div className="w-20 h-20 bg-background shadow-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileUp className={`w-10 h-10 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isDragActive ? 'Drop file here' : 'Choose file or drag & drop'}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Accepted formats: {tool.inputFormats.join(', ')} (Max: 50MB)
                  </p>
                  <Button size="lg" className="rounded-full px-8 shadow-md">Select File</Button>
                </div>
              </motion.div>
            )}

            {/* FILE SELECTED STATE */}
            {state === 'file_selected' && file && (
              <motion.div
                key="selected"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8"
              >
                <div className="bg-muted/50 rounded-xl p-6 mb-8 flex items-center justify-between border border-border">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-semibold truncate">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={clearFile} className="text-muted-foreground hover:text-destructive flex-shrink-0">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6 max-w-md mx-auto">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Settings2 className="w-5 h-5" /> Conversion Options
                  </h3>
                  
                  {tool.outputFormats.length > 1 && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Output Format</label>
                      <Select value={outputFormat} onValueChange={setOutputFormat}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          {tool.outputFormats.map(fmt => (
                            <SelectItem key={fmt} value={fmt}>{fmt.toUpperCase().replace('.', '')}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {tool.category === 'image' && (
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">Quality</label>
                        <span className="text-sm text-muted-foreground">{quality[0]}%</span>
                      </div>
                      <Slider 
                        value={quality} 
                        onValueChange={setQuality} 
                        max={100} 
                        min={10} 
                        step={1} 
                      />
                    </div>
                  )}

                  <Button 
                    size="lg" 
                    className="w-full text-lg h-14 rounded-xl mt-6 shadow-md"
                    onClick={handleConvert}
                  >
                    Convert to {outputFormat ? outputFormat.toUpperCase().replace('.', '') : tool.outputFormats[0].toUpperCase().replace('.', '')}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* CONVERTING STATE */}
            {state === 'converting' && (
              <motion.div
                key="converting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-16 text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Processing...</h3>
                <p className="text-muted-foreground mb-8">Please wait while we convert your file securely in your browser.</p>
                <div className="max-w-md mx-auto">
                  <Progress value={progress} className="h-3 mb-2" />
                  <p className="text-sm font-medium text-primary text-right">{Math.round(progress)}%</p>
                </div>
              </motion.div>
            )}

            {/* DONE STATE */}
            {state === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Conversion Complete!</h3>
                <p className="text-muted-foreground mb-8">Your file is ready to download.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="h-14 px-8 rounded-xl text-lg shadow-md w-full sm:w-auto" onClick={downloadResult}>
                    <Download className="w-5 h-5 mr-2" />
                    Download File
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl w-full sm:w-auto" onClick={reset}>
                    <RefreshCcw className="w-5 h-5 mr-2" />
                    Convert Another
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ERROR STATE */}
            {state === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileWarning className="w-10 h-10 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conversion Failed</h3>
                <p className="text-muted-foreground mb-8">{errorMessage}</p>
                <Button size="lg" onClick={reset}>Try Again</Button>
              </motion.div>
            )}

            {/* FALLBACK STATE */}
            {state === 'fallback' && (
              <motion.div
                key="fallback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings2 className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Server Processing Coming Soon</h3>
                <p className="text-muted-foreground mb-2 max-w-md mx-auto">
                  This conversion (e.g. PDF ↔ Word, audio/video) requires server-side processing which is on our roadmap.
                </p>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                  Currently supported tools: all image format conversions, image compression, image resizing, image to PDF, SVG to PNG, GIF to PNG, and ZIP creation/extraction.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" variant="outline" onClick={reset}>Try Another File</Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        <AdPlaceholder />

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="my-16">
            <h3 className="text-2xl font-bold mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`}>
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">{t.name}</div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="my-16">
          <h3 className="text-2xl font-bold mb-6">How to use the {tool.name} tool</h3>
          <Card>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full px-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I convert my file?</AccordionTrigger>
                  <AccordionContent>
                    Simply drag and drop your file into the upload zone above, or click to select a file from your device. Once selected, choose your output format and click "Convert".
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it safe to convert files here?</AccordionTrigger>
                  <AccordionContent>
                    Yes, 100% safe. FileConvert processes your files entirely within your web browser. Your files are never uploaded to our servers, ensuring complete privacy and security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any file size limits?</AccordionTrigger>
                  <AccordionContent>
                    Because processing happens locally in your browser, we limit file sizes to 50MB to prevent your browser from crashing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* SEO Text */}
        <div className="my-16 prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <h2>About our {tool.name} Converter</h2>
          <p>
            The FileConvert {tool.name} tool provides a seamless, secure, and fast way to {tool.description.toLowerCase()} Our browser-based conversion technology ensures that your sensitive data remains on your device, offering unparalleled privacy compared to cloud-based alternatives. Perfect for professionals, students, and businesses who need reliable file conversion without the risk of data exposure.
          </p>
        </div>

      </div>
    </div>
  );
}

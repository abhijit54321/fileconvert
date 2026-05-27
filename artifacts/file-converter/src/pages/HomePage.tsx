import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  FileUp, Zap, Lock, RefreshCw, Star, 
  FileText, Image as ImageIcon, FileType, Music, FileArchive, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { tools } from '../lib/tools';
import { SEOHead } from '../components/SEOHead';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const popularTools = tools.slice(0, 8);

  const categories = [
    { id: 'pdf', name: 'PDF Tools', icon: FileText, color: 'text-red-500', bg: 'bg-red-500/10' },
    { id: 'image', name: 'Image Tools', icon: ImageIcon, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'document', name: 'Document Tools', icon: FileType, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'audio-video', name: 'Audio & Video', icon: Music, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { id: 'archive', name: 'Archive Tools', icon: FileArchive, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  return (
    <div className="flex flex-col w-full">
      <SEOHead 
        title="FileConvert — Free Online File Converter | Convert PDF, Images & More"
        description="Convert Any File, Instantly — Free. 100+ tools for PDF, Image, Video, Audio, and more. All processed locally in your browser."
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-primary/30 bg-primary/5 text-primary">
              <Zap className="w-3.5 h-3.5 mr-2" />
              100% Free, Local Processing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 font-sans">
              Convert Any File,<br />Instantly — <span className="text-primary">Free</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              100+ tools for PDF, Image, Video, Audio, and more. All processed locally in your browser for ultimate privacy and speed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border shadow-xl rounded-2xl p-8 md:p-12 mb-8 relative group cursor-pointer hover:border-primary/50 transition-colors"
          >
            <Link href="/tools">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-xl p-12 bg-muted/30 group-hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-background shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Drag & Drop files here</h3>
                <p className="text-muted-foreground mb-6">or click to explore our 100+ tools</p>
                <Button size="lg" className="rounded-full px-8 shadow-md">
                  Explore All Tools
                </Button>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center"><Lock className="w-4 h-4 mr-2 text-primary" /> No upload required</div>
            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> 100% Free</div>
            <div className="flex items-center"><RefreshCw className="w-4 h-4 mr-2 text-primary" /> Instant Processing</div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4"><AdPlaceholder /></div>

      {/* Popular Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Popular Tools</h2>
            <Link href="/tools">
              <Button variant="ghost" className="hidden sm:flex">View all tools →</Button>
            </Link>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {popularTools.map(tool => (
              <motion.div key={tool.slug} variants={itemVariants}>
                <Link href={`/tools/${tool.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools">
              <Button variant="outline" className="w-full">View all tools</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Everything you need in one place</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.id} href={`/tools?category=${cat.id}`}>
                  <div className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.bg} ${cat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">{tools.filter(t => t.category === cat.id).length} tools</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why FileConvert?</h2>
            <p className="text-lg text-muted-foreground">The most secure, private, and fastest way to convert your files online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Private</h3>
              <p className="text-muted-foreground">Your files never leave your device. All processing happens locally in your browser using advanced WebAssembly technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">No waiting for uploads or downloads. Conversions start instantly and finish in milliseconds.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">We use industry-standard libraries to ensure your converted files maintain the highest possible quality.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><AdPlaceholder /></div>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-foreground/20">
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-primary-foreground/80 font-medium">Files Converted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80 font-medium">Free Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-primary-foreground/80 font-medium">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-primary-foreground/80 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Is it really 100% free?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! FileConvert is completely free to use. We don't require registration, and there are no hidden fees or premium tiers. We support the platform through unintrusive advertisements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Are my files secure?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Because FileConvert processes everything locally in your web browser, your files are never uploaded to any external server. They stay strictly on your device.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Is there a file size limit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We currently support files up to 50MB for optimal browser performance. Because processing happens on your device, very large files could slow down or crash your browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Do I need to install anything?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No installation is required. Everything runs entirely within your modern web browser (Chrome, Firefox, Safari, Edge) without requiring any plugins or extensions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Can I use FileConvert on my phone?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! FileConvert is fully responsive and works beautifully on smartphones and tablets, bringing desktop-grade conversion power to your mobile device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-muted/50 text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl prose prose-sm dark:prose-invert">
          <h2 className="text-lg font-semibold text-foreground mb-4">The Best Free Online File Converter</h2>
          <p>
            Welcome to FileConvert, the ultimate online platform for all your file conversion needs. Whether you're looking to convert PDF to Word, compress JPG images, merge PDF documents, or extract ZIP files, our comprehensive suite of 100+ tools has you covered. Unlike other converters like CloudConvert or SmallPDF, FileConvert leverages cutting-edge WebAssembly technology to process your files locally in your browser. This means zero upload times, lightning-fast conversions, and complete data privacy — your sensitive documents never leave your device. Try our industry-leading PDF tools, image converters, and document transformers today, completely free, with no registration required.
          </p>
        </div>
      </section>
    </div>
  );
}

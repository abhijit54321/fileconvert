import { useState, useCallback } from 'react';
import { processFile, ConversionOptions, ConversionResult } from '../lib/converters';
import { useToast } from './use-toast';

export type ConverterState = 'idle' | 'file_selected' | 'converting' | 'done' | 'error' | 'fallback';

export function useFileConverter(toolSlug: string) {
  const [state, setState] = useState<ConverterState>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const { toast } = useToast();

  const handleFileSelect = useCallback((selectedFile: File) => {
    // Validate size (50MB)
    if (selectedFile.size > 50 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 50MB for free accounts.",
        variant: "destructive"
      });
      return;
    }
    
    setFile(selectedFile);
    setState('file_selected');
    setResult(null);
    setProgress(0);
    setErrorMessage('');
  }, [toast]);

  const clearFile = useCallback(() => {
    setFile(null);
    setState('idle');
    setResult(null);
    setProgress(0);
  }, []);

  const convert = useCallback(async (options: ConversionOptions) => {
    if (!file) return;
    
    setState('converting');
    setProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 90) return p;
        return p + Math.random() * 15;
      });
    }, 200);

    try {
      const conversionResult = await processFile(file, toolSlug, options);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setTimeout(() => {
        setResult(conversionResult);
        setState('done');
      }, 300);
      
    } catch (error: any) {
      clearInterval(progressInterval);
      
      if (error.message === 'SERVER_REQUIRED') {
        setState('fallback');
      } else {
        setState('error');
        setErrorMessage(error.message || 'An error occurred during conversion.');
        toast({
          title: "Conversion Failed",
          description: error.message || 'An error occurred during conversion.',
          variant: "destructive"
        });
      }
    }
  }, [file, toolSlug, toast]);

  const downloadResult = useCallback(() => {
    if (!result) return;

    const url = URL.createObjectURL(result.blob);

    // Open in new tab — works reliably in all environments including iframes
    // where programmatic anchor clicks are blocked by "Desktop App Required" dialogs
    const newTab = window.open(url, '_blank');

    // Fallback: if pop-up was blocked, try the anchor approach
    if (!newTab) {
      const a = document.createElement('a');
      a.href = url;
      a.download = result.filename;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }, [result]);

  return {
    state,
    file,
    result,
    progress,
    errorMessage,
    handleFileSelect,
    clearFile,
    convert,
    downloadResult,
    reset: clearFile
  };
}

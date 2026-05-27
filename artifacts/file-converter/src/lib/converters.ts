import imageCompression from 'browser-image-compression';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';

export interface ConversionResult {
  blob: Blob;
  filename: string;
  size: number;
}

export type ConversionOptions = {
  quality?: number;
  outputFormat?: string;
};

export const convertImageFormat = async (file: File, options: ConversionOptions): Promise<ConversionResult> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      
      const mimeType = options.outputFormat === '.png' ? 'image/png' : 
                       options.outputFormat === '.webp' ? 'image/webp' : 
                       'image/jpeg';
                       
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to create blob'));
          return;
        }
        
        const originalName = file.name.split('.')[0];
        const ext = options.outputFormat || '.jpg';
        
        resolve({
          blob,
          filename: `${originalName}${ext}`,
          size: blob.size
        });
      }, mimeType, (options.quality || 80) / 100);
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
};

export const compressImage = async (file: File, options: ConversionOptions): Promise<ConversionResult> => {
  const quality = (options.quality || 80) / 100;
  const compressedFile = await imageCompression(file, {
    maxSizeMB: 5,
    maxWidthOrHeight: 4000,
    useWebWorker: true,
    initialQuality: quality,
  });
  
  return {
    blob: compressedFile,
    filename: `compressed_${file.name}`,
    size: compressedFile.size
  };
};

export const imageToPdf = async (file: File): Promise<ConversionResult> => {
  const pdfDoc = await PDFDocument.create();
  const arrayBuffer = await file.arrayBuffer();
  
  let image;
  if (file.type === 'image/jpeg' || file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.jpeg')) {
    image = await pdfDoc.embedJpg(arrayBuffer);
  } else if (file.type === 'image/png' || file.name.toLowerCase().endsWith('.png')) {
    image = await pdfDoc.embedPng(arrayBuffer);
  } else {
    throw new Error('Unsupported image format for PDF conversion. Please use JPG or PNG.');
  }
  
  const page = pdfDoc.addPage([image.width, image.height]);
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: image.width,
    height: image.height,
  });
  
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  
  const originalName = file.name.split('.')[0];
  
  return {
    blob,
    filename: `${originalName}.pdf`,
    size: blob.size
  };
};

export const createZip = async (file: File): Promise<ConversionResult> => {
  const zip = new JSZip();
  zip.file(file.name, file);
  
  const blob = await zip.generateAsync({ type: 'blob' });
  const originalName = file.name.split('.')[0];
  
  return {
    blob,
    filename: `${originalName}.zip`,
    size: blob.size
  };
};

export const resizeImage = async (file: File, options: ConversionOptions): Promise<ConversionResult> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = (options.quality || 80) / 100;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('Canvas context failed')); return; }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) { reject(new Error('Failed to create blob')); return; }
        const ext = file.name.split('.').pop() || 'jpg';
        resolve({ blob, filename: `resized_${file.name.replace(/\.[^.]+$/, '')}.${ext}`, size: blob.size });
      }, file.type || 'image/jpeg', 0.92);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load image')); };
    img.src = url;
  });
};

export const svgToPng = async (file: File): Promise<ConversionResult> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const svgText = e.target?.result as string;
      const blob = new Blob([svgText], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        const canvas = document.createElement('canvas');
        canvas.width = img.width || 800;
        canvas.height = img.height || 600;
        const ctx = canvas.getContext('2d');
        if (!ctx) { reject(new Error('Canvas context failed')); return; }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((pngBlob) => {
          if (!pngBlob) { reject(new Error('Failed to create blob')); return; }
          const name = file.name.replace(/\.svg$/i, '');
          resolve({ blob: pngBlob, filename: `${name}.png`, size: pngBlob.size });
        }, 'image/png');
      };
      img.onerror = () => reject(new Error('Failed to render SVG'));
      img.src = url;
    };
    reader.readAsText(file);
  });
};

export const gifToPng = async (file: File): Promise<ConversionResult> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('Canvas context failed')); return; }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) { reject(new Error('Failed to create blob')); return; }
        const name = file.name.replace(/\.gif$/i, '');
        resolve({ blob, filename: `${name}.png`, size: blob.size });
      }, 'image/png');
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load GIF')); };
    img.src = url;
  });
};

export const extractZip = async (file: File): Promise<ConversionResult> => {
  const JSZip = (await import('jszip')).default;
  const zip = await JSZip.loadAsync(file);
  const fileNames = Object.keys(zip.files).join('\n');
  const txtBlob = new Blob([`Files in ${file.name}:\n\n${fileNames}`], { type: 'text/plain' });
  return { blob: txtBlob, filename: `${file.name}_contents.txt`, size: txtBlob.size };
};

export const processFile = async (
  file: File,
  toolSlug: string,
  options: ConversionOptions
): Promise<ConversionResult> => {

  // Image format conversions via Canvas API
  if (['jpg-to-png', 'png-to-jpg', 'png-to-webp', 'webp-to-jpg', 'webp-to-png',
       'image-converter', 'jpg-to-gif', 'gif-to-jpg'].includes(toolSlug)) {
    return convertImageFormat(file, options);
  }

  // GIF to PNG (first frame)
  if (toolSlug === 'gif-to-png') {
    return gifToPng(file);
  }

  // SVG to PNG
  if (toolSlug === 'svg-to-png') {
    return svgToPng(file);
  }

  // Image compression
  if (toolSlug === 'compress-image') {
    return compressImage(file, options);
  }

  // Resize image (scale by quality %)
  if (toolSlug === 'resize-image') {
    return resizeImage(file, options);
  }

  // Image to PDF
  if (['image-to-pdf', 'jpg-to-pdf', 'png-to-pdf'].includes(toolSlug)) {
    return imageToPdf(file);
  }

  // ZIP operations
  if (toolSlug === 'zip-creator') {
    return createZip(file);
  }

  // ZIP extraction — returns a text listing of files inside
  if (['zip-extractor', 'rar-extractor', 'tar-extractor'].includes(toolSlug)) {
    return extractZip(file);
  }

  // Tools that genuinely require server-side processing
  await new Promise(resolve => setTimeout(resolve, 1500));
  throw new Error('SERVER_REQUIRED');
};

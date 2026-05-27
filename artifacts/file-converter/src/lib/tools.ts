export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: "pdf" | "image" | "document" | "audio-video" | "archive";
  inputFormats: string[];
  outputFormats: string[];
  icon: string;
}

export const tools: Tool[] = [
  // PDF Tools
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF documents to editable Word files.",
    category: "pdf",
    inputFormats: [".pdf"],
    outputFormats: [".docx", ".doc"],
    icon: "FileText"
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF files.",
    category: "pdf",
    inputFormats: [".docx", ".doc"],
    outputFormats: [".pdf"],
    icon: "FileUp"
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDFs into a single document.",
    category: "pdf",
    inputFormats: [".pdf"],
    outputFormats: [".pdf"],
    icon: "Layers"
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce the file size of your PDFs.",
    category: "pdf",
    inputFormats: [".pdf"],
    outputFormats: [".pdf"],
    icon: "Minimize2"
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    description: "Extract pages from your PDF or split it into smaller ones.",
    category: "pdf",
    inputFormats: [".pdf"],
    outputFormats: [".pdf"],
    icon: "SplitSquareHorizontal"
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    description: "Convert JPG, PNG, and other images to PDF.",
    category: "pdf",
    inputFormats: [".jpg", ".jpeg", ".png", ".webp"],
    outputFormats: [".pdf"],
    icon: "ImageDown"
  },
  {
    slug: "pdf-to-jpg",
    name: "PDF to JPG",
    description: "Convert PDF pages to high-quality JPG images.",
    category: "pdf",
    inputFormats: [".pdf"],
    outputFormats: [".jpg"],
    icon: "ImageUp"
  },
  {
    slug: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Convert JPG images to PDF documents.",
    category: "pdf",
    inputFormats: [".jpg", ".jpeg"],
    outputFormats: [".pdf"],
    icon: "FileImage"
  },

  // Image Tools
  {
    slug: "jpg-to-png",
    name: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    category: "image",
    inputFormats: [".jpg", ".jpeg"],
    outputFormats: [".png"],
    icon: "ImageIcon"
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG",
    description: "Convert PNG images to JPG format.",
    category: "image",
    inputFormats: [".png"],
    outputFormats: [".jpg"],
    icon: "ImageIcon"
  },
  {
    slug: "png-to-webp",
    name: "PNG to WebP",
    description: "Convert PNG images to WebP format.",
    category: "image",
    inputFormats: [".png"],
    outputFormats: [".webp"],
    icon: "ImageIcon"
  },
  {
    slug: "webp-to-jpg",
    name: "WebP to JPG",
    description: "Convert WebP images to JPG format.",
    category: "image",
    inputFormats: [".webp"],
    outputFormats: [".jpg"],
    icon: "ImageIcon"
  },
  {
    slug: "webp-to-png",
    name: "WebP to PNG",
    description: "Convert WebP images to PNG format.",
    category: "image",
    inputFormats: [".webp"],
    outputFormats: [".png"],
    icon: "ImageIcon"
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    description: "Change the dimensions of your images.",
    category: "image",
    inputFormats: [".jpg", ".jpeg", ".png", ".webp"],
    outputFormats: [".jpg", ".png", ".webp"],
    icon: "Maximize"
  },
  {
    slug: "compress-image",
    name: "Compress Image",
    description: "Reduce the file size of your images.",
    category: "image",
    inputFormats: [".jpg", ".jpeg", ".png", ".webp"],
    outputFormats: [".jpg", ".png", ".webp"],
    icon: "Minimize"
  },
  {
    slug: "image-converter",
    name: "Image Converter",
    description: "Convert between various image formats.",
    category: "image",
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp"],
    outputFormats: [".jpg", ".png", ".webp", ".gif", ".bmp"],
    icon: "RefreshCcw"
  },
  {
    slug: "crop-image",
    name: "Crop Image",
    description: "Crop unwanted edges from your images.",
    category: "image",
    inputFormats: [".jpg", ".jpeg", ".png", ".webp"],
    outputFormats: [".jpg", ".png", ".webp"],
    icon: "Crop"
  },
  {
    slug: "jpg-to-gif",
    name: "JPG to GIF",
    description: "Convert JPG images to GIF format.",
    category: "image",
    inputFormats: [".jpg", ".jpeg"],
    outputFormats: [".gif"],
    icon: "Film"
  },
  {
    slug: "gif-to-png",
    name: "GIF to PNG",
    description: "Convert GIF frames to PNG format.",
    category: "image",
    inputFormats: [".gif"],
    outputFormats: [".png"],
    icon: "ImageIcon"
  },
  {
    slug: "svg-to-png",
    name: "SVG to PNG",
    description: "Convert SVG vector graphics to PNG.",
    category: "image",
    inputFormats: [".svg"],
    outputFormats: [".png"],
    icon: "Vector"
  },

  // Document Tools
  {
    slug: "docx-to-pdf",
    name: "DOCX to PDF",
    description: "Convert Word DOCX documents to PDF.",
    category: "document",
    inputFormats: [".docx"],
    outputFormats: [".pdf"],
    icon: "FileText"
  },
  {
    slug: "ppt-to-pdf",
    name: "PPT to PDF",
    description: "Convert PowerPoint presentations to PDF.",
    category: "document",
    inputFormats: [".ppt", ".pptx"],
    outputFormats: [".pdf"],
    icon: "Presentation"
  },
  {
    slug: "excel-to-pdf",
    name: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF.",
    category: "document",
    inputFormats: [".xls", ".xlsx"],
    outputFormats: [".pdf"],
    icon: "Table"
  },
  {
    slug: "txt-to-pdf",
    name: "TXT to PDF",
    description: "Convert plain text files to PDF.",
    category: "document",
    inputFormats: [".txt"],
    outputFormats: [".pdf"],
    icon: "FileType"
  },
  {
    slug: "pdf-to-txt",
    name: "PDF to TXT",
    description: "Extract text from PDF documents.",
    category: "document",
    inputFormats: [".pdf"],
    outputFormats: [".txt"],
    icon: "FileText"
  },

  // Audio/Video Tools
  {
    slug: "mp4-to-mp3",
    name: "MP4 to MP3",
    description: "Extract audio from MP4 video files.",
    category: "audio-video",
    inputFormats: [".mp4"],
    outputFormats: [".mp3"],
    icon: "Music"
  },
  {
    slug: "mp3-to-wav",
    name: "MP3 to WAV",
    description: "Convert MP3 audio to WAV format.",
    category: "audio-video",
    inputFormats: [".mp3"],
    outputFormats: [".wav"],
    icon: "AudioWaveform"
  },
  {
    slug: "wav-to-mp3",
    name: "WAV to MP3",
    description: "Convert WAV audio to MP3 format.",
    category: "audio-video",
    inputFormats: [".wav"],
    outputFormats: [".mp3"],
    icon: "FileAudio"
  },
  {
    slug: "video-converter",
    name: "Video Converter",
    description: "Convert between various video formats.",
    category: "audio-video",
    inputFormats: [".mp4", ".avi", ".mov", ".mkv", ".webm"],
    outputFormats: [".mp4", ".avi", ".webm"],
    icon: "Video"
  },
  {
    slug: "audio-converter",
    name: "Audio Converter",
    description: "Convert between various audio formats.",
    category: "audio-video",
    inputFormats: [".mp3", ".wav", ".ogg", ".flac", ".aac"],
    outputFormats: [".mp3", ".wav", ".ogg"],
    icon: "Headphones"
  },
  {
    slug: "mp4-to-gif",
    name: "MP4 to GIF",
    description: "Convert MP4 videos to animated GIFs.",
    category: "audio-video",
    inputFormats: [".mp4"],
    outputFormats: [".gif"],
    icon: "Film"
  },

  // Archive Tools
  {
    slug: "zip-extractor",
    name: "ZIP Extractor",
    description: "Extract files from ZIP archives.",
    category: "archive",
    inputFormats: [".zip"],
    outputFormats: [".extracted"],
    icon: "FileArchive"
  },
  {
    slug: "zip-creator",
    name: "ZIP Creator",
    description: "Compress files into a ZIP archive.",
    category: "archive",
    inputFormats: ["*"],
    outputFormats: [".zip"],
    icon: "Archive"
  },
  {
    slug: "rar-extractor",
    name: "RAR Extractor",
    description: "Extract files from RAR archives.",
    category: "archive",
    inputFormats: [".rar"],
    outputFormats: [".extracted"],
    icon: "FileArchive"
  },
  {
    slug: "tar-extractor",
    name: "TAR Extractor",
    description: "Extract files from TAR archives.",
    category: "archive",
    inputFormats: [".tar", ".gz", ".tar.gz"],
    outputFormats: [".extracted"],
    icon: "FileArchive"
  }
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(t => t.slug === slug);
};

export const getToolsByCategory = (category: Tool["category"]): Tool[] => {
  return tools.filter(t => t.category === category);
};

export const searchTools = (query: string): Tool[] => {
  const q = query.toLowerCase();
  return tools.filter(t => 
    t.name.toLowerCase().includes(q) || 
    t.description.toLowerCase().includes(q)
  );
};

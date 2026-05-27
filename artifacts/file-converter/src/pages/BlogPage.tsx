import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const articles = [
  {
    slug: 'compress-pdf-without-losing-quality',
    title: 'How to Compress a PDF Without Losing Quality',
    excerpt: 'Learn the best techniques and tools to reduce your PDF file size while maintaining crystal-clear text and images.',
    category: 'Guides',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    image: 'bg-blue-500/20'
  },
  {
    slug: 'png-vs-jpg-vs-webp',
    title: 'PNG vs JPG vs WebP: Which Format Should You Use?',
    excerpt: 'A comprehensive breakdown of image formats, their pros and cons, and when to use each for web design and photography.',
    category: 'Education',
    date: 'Oct 05, 2026',
    readTime: '8 min read',
    image: 'bg-purple-500/20'
  },
  {
    slug: 'top-10-free-pdf-tools',
    title: 'Top 10 Free PDF Tools in 2026',
    excerpt: 'We review the best free PDF editors, converters, and compressors available online right now.',
    category: 'Reviews',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    image: 'bg-green-500/20'
  },
  {
    slug: 'convert-word-to-pdf',
    title: 'How to Convert Word to PDF in Seconds',
    excerpt: 'A quick, step-by-step guide to transforming your Microsoft Word documents into universally compatible PDFs.',
    category: 'Tutorials',
    date: 'Sep 15, 2026',
    readTime: '3 min read',
    image: 'bg-red-500/20'
  },
  {
    slug: 'guide-to-image-compression',
    title: 'The Complete Guide to Image Compression',
    excerpt: 'Understand lossless vs. lossy compression and how to optimize images for faster website loading speeds.',
    category: 'Deep Dive',
    date: 'Sep 02, 2026',
    readTime: '10 min read',
    image: 'bg-amber-500/20'
  },
  {
    slug: 'extract-files-zip',
    title: 'How to Extract Files from a ZIP Archive',
    excerpt: 'Everything you need to know about zipping and unzipping files securely on any operating system.',
    category: 'Basics',
    date: 'Aug 20, 2026',
    readTime: '4 min read',
    image: 'bg-cyan-500/20'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="Blog — FileConvert"
        description="Tips, tricks, and tutorials on file conversion, document management, and image optimization."
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">FileConvert Blog</h1>
          <p className="text-xl text-muted-foreground">
            Tips, tricks, and tutorials on document management, file conversion, and digital productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group overflow-hidden flex flex-col">
                <div className={`h-48 w-full ${article.image} flex items-center justify-center`}>
                  {/* Decorative placeholder for blog image */}
                  <div className="w-20 h-20 rounded-full bg-background/50 backdrop-blur-sm" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="font-normal">{article.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground gap-1 mt-auto pt-4 border-t border-border">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

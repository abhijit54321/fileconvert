import React from 'react';
import { useRoute, Link } from 'wouter';
import { FileText, Image as ImageIcon, FileType, Music, FileArchive } from 'lucide-react';
import { searchTools } from '../lib/tools';
import { Card, CardContent } from '../components/ui/card';
import { SEOHead } from '../components/SEOHead';

export default function SearchPage() {
  const [match] = useRoute('/search');
  
  // Custom hook to read query params in wouter
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get('q') || '';
  
  const results = searchTools(query);

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title={`Search results for "${query}" — FileConvert`}
        description={`Search results for ${query} on FileConvert.`}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Search Results</h1>
          <p className="text-muted-foreground">
            {results.length} result{results.length !== 1 && 's'} found for "{query}"
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-24 bg-card border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">No tools found</h2>
            <p className="text-muted-foreground mb-8">We couldn't find any tools matching your search query.</p>
            <Link href="/tools" className="text-primary font-medium hover:underline">
              Browse all tools →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map(tool => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group bg-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {tool.category === 'pdf' && <FileText className="w-6 h-6 text-primary" />}
                      {tool.category === 'image' && <ImageIcon className="w-6 h-6 text-primary" />}
                      {tool.category === 'document' && <FileType className="w-6 h-6 text-primary" />}
                      {tool.category === 'audio-video' && <Music className="w-6 h-6 text-primary" />}
                      {tool.category === 'archive' && <FileArchive className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                    <div className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                      Use Tool <span className="ml-1">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

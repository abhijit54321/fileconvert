import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, FileType, Music, FileArchive, Search } from 'lucide-react';
import { tools } from '../lib/tools';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { SEOHead } from '../components/SEOHead';
import { AdPlaceholder } from '../components/AdPlaceholder';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function AllToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTools = searchQuery 
    ? tools.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tools;

  const getToolsByCategory = (category: string) => {
    if (category === 'all') return filteredTools;
    return filteredTools.filter(t => t.category === category);
  };

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'pdf', name: 'PDF Tools', icon: FileText },
    { id: 'image', name: 'Image Tools', icon: ImageIcon },
    { id: 'document', name: 'Document', icon: FileType },
    { id: 'audio-video', name: 'Audio/Video', icon: Music },
    { id: 'archive', name: 'Archive', icon: FileArchive },
  ];

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="All Tools — FileConvert"
        description="Browse all 100+ free online file conversion tools. Convert PDF, Image, Video, Audio and more locally in your browser."
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">All Tools</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to convert, compress, and edit files online.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              className="pl-10 h-12 text-lg rounded-full bg-muted/50 border-transparent focus:bg-background shadow-sm"
              placeholder="Search tools (e.g., PDF to Word)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="my-8"><AdPlaceholder /></div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="bg-muted/50 p-1 rounded-xl h-auto">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(cat => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0 outline-none">
              {getToolsByCategory(cat.id).length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  <p className="text-lg">No tools found matching your search.</p>
                </div>
              ) : (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {getToolsByCategory(cat.id).map(tool => (
                    <motion.div key={tool.slug} variants={itemVariants}>
                      <Link href={`/tools/${tool.slug}`}>
                        <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group bg-card">
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                            <div className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                              Use Tool <span className="ml-1">→</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

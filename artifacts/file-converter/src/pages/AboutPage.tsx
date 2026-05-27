import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Shield, Zap, Globe, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="About Us — FileConvert"
        description="Learn about the team behind FileConvert and our mission to provide secure, local file conversion tools."
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About FileConvert</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the world's most secure and reliable suite of file conversion tools.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p className="lead text-xl">
            We started FileConvert because we were tired of uploading our sensitive documents to unknown servers just to convert a PDF to Word or resize an image.
          </p>
          <p>
            In the past, online file converters required you to upload your file to their servers, wait in a queue, wait for the processing to finish, and then download the result. Not only was this slow, but it was a massive privacy risk. Who knows what those servers were doing with your financial documents, personal photos, or legal contracts?
          </p>
          <p>
            With recent advancements in WebAssembly and modern browser APIs, we realized we could do better. We built FileConvert to process everything locally. Your files never leave your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Privacy First</h3>
            <p className="text-muted-foreground">We literally cannot see your files. Because all processing happens in your browser, your data remains strictly on your device.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Built for Speed</h3>
            <p className="text-muted-foreground">No uploading means no waiting. Conversions happen as fast as your device's CPU can process them, which is often instantaneous.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Globe className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Accessible to All</h3>
            <p className="text-muted-foreground">We believe essential utility tools should be free. We support our platform through minimal ads rather than paywalls.</p>
          </div>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Crafted with Care</h3>
            <p className="text-muted-foreground">We obsess over the details. Every tool is carefully designed to be intuitive, robust, and beautiful to use.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

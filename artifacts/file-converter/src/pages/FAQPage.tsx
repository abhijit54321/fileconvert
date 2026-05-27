import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="FAQ — FileConvert"
        description="Frequently asked questions about FileConvert, privacy, security, and our file conversion tools."
      />
      
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FileConvert and how it works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">Is FileConvert really 100% free?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              Yes, FileConvert is completely free to use. We do not require you to create an account, enter a credit card, or pay for premium features. The site is supported entirely through unobtrusive advertisements.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">Are my files kept private and secure?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              Absolutely. Unlike traditional online converters that upload your files to a server, FileConvert uses WebAssembly technology to process your files locally within your own web browser. Your files never leave your device, meaning we literally cannot access, view, or store your data.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">What is the maximum file size limit?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              We currently enforce a 50MB file size limit. Because processing happens locally on your device, attempting to process massive files within a web browser could cause your browser tab to freeze or crash due to memory constraints.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">Do I need to install any software?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              No installation is necessary. FileConvert runs entirely inside modern web browsers like Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. Just open the website and start converting immediately.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">Does this work on mobile devices?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              Yes, FileConvert is fully responsive and designed to work on smartphones and tablets (iOS and Android). Just keep in mind that mobile devices generally have less processing power than desktop computers, so conversions might take slightly longer.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium">My conversion failed. What happened?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
              Browser-based conversion is powerful but occasionally runs into limitations. If a conversion fails, it usually means the file is corrupted, it's too complex/large for the browser's memory, or it uses an obscure codec we don't currently support. For highly complex operations like heavy video transcoding, we recommend dedicated desktop software.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

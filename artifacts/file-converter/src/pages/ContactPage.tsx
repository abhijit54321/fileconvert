import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="Contact Us — FileConvert"
        description="Get in touch with the FileConvert team for support, feature requests, or business inquiries."
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have a question, feedback, or feature request? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-primary" /> Support
              </h3>
              <p className="text-muted-foreground text-sm mb-2">Need help with a tool or experiencing an issue?</p>
              <a href="mailto:support@fileconvert.com" className="text-primary font-medium hover:underline">support@fileconvert.com</a>
            </div>
            
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-primary" /> Feedback
              </h3>
              <p className="text-muted-foreground text-sm mb-2">Have an idea for a new tool or improvement?</p>
              <a href="mailto:ideas@fileconvert.com" className="text-primary font-medium hover:underline">ideas@fileconvert.com</a>
            </div>
            
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-primary" /> Business
              </h3>
              <p className="text-muted-foreground text-sm mb-2">For partnerships and business inquiries.</p>
              <a href="mailto:hello@fileconvert.com" className="text-primary font-medium hover:underline">hello@fileconvert.com</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" required placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Your message here..." 
                      className="min-h-[150px] resize-y"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { SEOHead } from '../components/SEOHead';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="Terms of Service — FileConvert"
        description="Terms and conditions for using FileConvert's online tools."
      />
      
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="lead text-muted-foreground">Last updated: October 15, 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using FileConvert (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          FileConvert provides browser-based file conversion tools. Because the Service operates locally within your web browser, its performance is dependent on your device's hardware, your browser version, and the complexity of the files being processed.
        </p>

        <h2>3. Use of the Service</h2>
        <p>You agree to use the Service only for lawful purposes. You are solely responsible for the files you process using our tools. You agree not to use the Service to:</p>
        <ul>
          <li>Process files containing malicious code, malware, or viruses.</li>
          <li>Infringe upon any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
          <li>Engage in any activity that could disable, overburden, damage, or impair the Service.</li>
        </ul>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. FileConvert does not warrant that the Service will be uninterrupted, error-free, or entirely secure. 
        </p>
        <p>
          We do not guarantee that file conversions will be 100% accurate, retain all formatting, or be free of artifacts. You are advised to always keep backups of your original files.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL FILECONVERT OR ITS CREATORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of FileConvert. The Service is protected by copyright, trademark, and other laws.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@fileconvert.com.</p>
      </div>
    </div>
  );
}

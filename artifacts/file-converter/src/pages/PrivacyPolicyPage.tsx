import React from 'react';
import { SEOHead } from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <SEOHead 
        title="Privacy Policy — FileConvert"
        description="Learn about our commitment to your privacy and how FileConvert handles your data."
      />
      
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="lead text-muted-foreground">Last updated: October 15, 2026</p>
        
        <h2>1. The Short Version: We Don't See Your Files</h2>
        <p>
          At FileConvert, your privacy is our primary feature, not an afterthought. <strong>All file conversions happen locally in your web browser.</strong> This means your files are never uploaded to our servers, we never see them, we never store them, and we cannot share them with anyone. 
        </p>

        <h2>2. Information We Collect</h2>
        <p>Because we do not require accounts and we process files locally, we collect very little data. We only collect:</p>
        <ul>
          <li><strong>Website Analytics:</strong> Anonymous, aggregated data regarding website traffic (e.g., page views, browser types) using standard analytics tools to help us improve the site.</li>
          <li><strong>Contact Information:</strong> If you voluntarily reach out to us via email or our contact form, we will have your email address and any information you provide in the message.</li>
          <li><strong>Newsletter Subscriptions:</strong> If you subscribe to our newsletter, we collect your email address solely for sending you updates.</li>
        </ul>

        <h2>3. How We Use Cookies</h2>
        <p>We use local storage and standard web cookies to:</p>
        <ul>
          <li>Remember your dark mode / light mode preference.</li>
          <li>Serve relevant, non-intrusive advertisements to keep the site free.</li>
          <li>Ensure basic website functionality.</li>
        </ul>

        <h2>4. Third-Party Services</h2>
        <p>We use a few trusted third-party services that have their own privacy policies:</p>
        <ul>
          <li><strong>Google Analytics:</strong> For anonymous traffic reporting.</li>
          <li><strong>Ad Networks:</strong> To display ads on the site. These networks may use cookies to serve ads based on your prior visits to this and other websites.</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>Depending on where you live (e.g., under GDPR or CCPA), you have the right to request access to the data we have on you, or request its deletion. Since we don't have accounts and don't store files, this generally only applies to email addresses provided for newsletters or contact requests.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@fileconvert.com.</p>
      </div>
    </div>
  );
}

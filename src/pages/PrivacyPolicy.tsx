import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const handleGoBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Close
          </Button>

          <div className="bg-card rounded-lg border p-8 shadow-sm">
            <h1 className="text-4xl font-display font-bold text-secondary mb-6">
              Privacy Policy – XO Graphics
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg text-muted-foreground mb-8">
                At XO Graphics, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services, including static website development and editable Canva templates.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  📥 Information We Collect
                </h2>
                <p className="mb-4">We may collect personal details such as your:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>
                <p className="mb-4">
                  This information is only collected when you voluntarily submit it through our website's contact forms, WhatsApp inquiries, or email communications.
                </p>
                <p className="mb-4">We may also collect non-personal information like:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                </ul>
                <p>This data helps us analyze site performance and enhance user experience.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🛠 How We Use Your Information
                </h2>
                <p className="mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide relevant service details.</li>
                  <li>To process requests related to web development or editable design templates.</li>
                  <li>To personalize and improve our website and services.</li>
                  <li>To share occasional updates or offers, only if you've opted in. You may unsubscribe at any time.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🔐 Data Security
                </h2>
                <p>
                  XO Graphics takes appropriate security measures to protect your information from unauthorized access, alteration, or misuse. However, please understand that no online method is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🚫 Third-Party Sharing
                </h2>
                <p>
                  We do not sell, trade, or share your personal information with third parties, unless required to deliver our services or comply with legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🔗 External Links
                </h2>
                <p>
                  Our website or portfolio may contain links to third-party websites (e.g., client sites or design platforms like Canva). XO Graphics is not responsible for the content or privacy policies of those external sites. We recommend reviewing their policies before submitting any personal data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🧾 Your Rights
                </h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access or update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Ask questions about how your data is used</li>
                </ul>
                <p>
                  To exercise any of these rights, feel free to reach out using the contact details below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  🔄 Policy Updates
                </h2>
                <p>
                  XO Graphics may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our website indicates your agreement with the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  📞 Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions or concerns about this Privacy Policy or your personal data, contact us at:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href="https://wa.me/918072888570" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +91 8072888570 (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:xographics1017@gmail.com"
                      className="text-primary hover:underline"
                    >
                      xographics1017@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <a 
                      href="https://www.instagram.com/_xographics_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @_xographics_
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
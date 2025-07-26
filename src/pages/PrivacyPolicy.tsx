import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import SmokyBackground from '@/components/SmokyBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const handleGoBack = () => {
    window.close();
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <SmokyBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="mb-6 text-muted-foreground hover:text-foreground font-display"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Close
            </Button>

            <div className="bg-card rounded-lg border p-8 shadow-sm">
              <h1 className="text-4xl font-display font-bold text-secondary dark:text-white mb-6">
                Privacy Policy – XO Graphics
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg text-muted-foreground mb-8 font-serif">
                  At XO Graphics, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services, including static website development and editable Canva templates.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Information We Collect
                  </h2>
                  <p className="mb-4 font-serif">We may collect personal details such as your:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 font-serif">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                  </ul>
                  <p className="mb-4 font-serif">
                    This information is only collected when you voluntarily submit it through our website's contact forms, WhatsApp inquiries, or email communications.
                  </p>
                  <p className="mb-4 font-serif">We may also collect non-personal information like:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 font-serif">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                  </ul>
                  <p className="font-serif">This data helps us analyze site performance and enhance user experience.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    How We Use Your Information
                  </h2>
                  <p className="mb-4 font-serif">We use your information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 font-serif">
                    <li>To respond to your inquiries and provide relevant service details.</li>
                    <li>To process requests related to web development or editable design templates.</li>
                    <li>To personalize and improve our website and services.</li>
                    <li>To share occasional updates or offers, only if you've opted in. You may unsubscribe at any time.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Data Security
                  </h2>
                  <p className="font-serif">
                    XO Graphics takes appropriate security measures to protect your information from unauthorized access, alteration, or misuse. However, please understand that no online method is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Third-Party Sharing
                  </h2>
                  <p className="font-serif">
                    We do not sell, trade, or share your personal information with third parties, unless required to deliver our services or comply with legal obligations.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    External Links
                  </h2>
                  <p className="font-serif">
                    Our website or portfolio may contain links to third-party websites (e.g., client sites or design platforms like Canva). XO Graphics is not responsible for the content or privacy policies of those external sites. We recommend reviewing their policies before submitting any personal data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Your Rights
                  </h2>
                  <p className="mb-4 font-serif">You have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 font-serif">
                    <li>Access or update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Ask questions about how your data is used</li>
                  </ul>
                  <p className="font-serif">
                    To exercise any of these rights, feel free to reach out using the contact details below.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Policy Updates
                  </h2>
                  <p className="font-serif">
                    XO Graphics may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our website indicates your agreement with the updated terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-4 flex items-center font-display">
                    Contact Us
                  </h2>
                  <p className="mb-4 font-serif">
                    If you have questions or concerns about this Privacy Policy or your personal data, contact us at:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a 
                        href="https://wa.me/918072888570" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-serif"
                      >
                        +91 8072888570 (WhatsApp)
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a 
                        href="mailto:xographics1017@gmail.com"
                        className="text-primary hover:underline font-serif"
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
                        className="text-primary hover:underline font-serif"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
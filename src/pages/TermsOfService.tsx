import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
              Terms of Service – XO Graphics
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg text-muted-foreground mb-8">
                These Terms of Service ("Terms") apply to all website design and editable template services offered by XO Graphics ("we", "us", or "our") to clients ("you" or "your"). By engaging our services, you agree to the terms outlined below.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  1. Standard Terms
                </h2>
                <p>
                  These are the standard terms for all design and static website development projects undertaken by XO Graphics. They apply to every contract, order, or service provided unless otherwise agreed in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  2. Non-Disclosure
                </h2>
                <p>
                  We respect your privacy and agree not to disclose any confidential or proprietary information shared with us during the project, unless legally required or authorized by you in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  3. Payment Terms
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A 50% advance payment is required to begin any project.</li>
                  <li>The remaining 50% is due upon completion and approval of the final work.</li>
                  <li>No work will begin until the initial payment has been received in full.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  4. Design Revisions
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We offer limited revisions to design work during the development phase.</li>
                  <li>Major changes or deviations from the initial brief may result in additional charges.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  5. Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are required to provide complete content (text, images, branding elements) in a timely manner.</li>
                  <li>A designated contact person from your end should be available for approvals and feedback to avoid delays.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  6. Project Completion & Approval
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will be notified upon completion of the project and have 3 days to review and report any changes.</li>
                  <li>If no feedback is received within this period, the project will be deemed approved and the remaining balance will be due.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  7. Rejected Work
                </h2>
                <p>
                  If, within the 3-day review window, work is rejected without reasonable cause or you fail to approve revised work, XO Graphics reserves the right to terminate the contract and recover payment for work completed to date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  8. Ownership & Licensing
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upon full payment, you will receive a license to use the static website or design templates for your personal or business use.</li>
                  <li>All deliverables remain the property of XO Graphics until the project has been paid in full.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  9. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must ensure that all content (logos, images, text) provided to us is owned by you or properly licensed.</li>
                  <li>XO Graphics is not liable for any copyright infringement related to content you supply.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  10. External Links & Canva Templates
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any third-party platform (e.g., Canva, Instagram, WhatsApp) linked from your website or templates is governed by that platform's terms of use.</li>
                  <li>XO Graphics is not responsible for changes or functionality issues on those platforms.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  11. Search Engine Visibility
                </h2>
                <p>
                  While we apply basic SEO best practices for static websites, we do not guarantee rankings or visibility in search engine results.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  12. Delays & Liability
                </h2>
                <p className="mb-4">XO Graphics is not liable for delays caused by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Incomplete content or assets from your side</li>
                  <li>Lack of timely feedback</li>
                  <li>Force majeure or unavoidable technical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  13. File Delivery & Backup
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We deliver your files via email, Google Drive, or GitHub (if applicable).</li>
                  <li>You are responsible for backing up your website files or Canva templates once delivered. We do not offer ongoing hosting or storage.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  14. Payment Failures
                </h2>
                <p className="mb-4">In case of non-payment after the project is approved or files are delivered, XO Graphics reserves the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Suspend services or access to design files</li>
                  <li>Take legal action to recover unpaid dues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  15. Governing Law
                </h2>
                <p>
                  All services and agreements are governed by the laws of Chennai, Tamil Nadu, India. Any disputes will be subject to the jurisdiction of Chennai courts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  16. Updates to Terms
                </h2>
                <p>
                  XO Graphics may update these Terms of Service at any time without prior notice. It is your responsibility to review them periodically. Continued use of our services implies acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                  📞 Contact
                </h2>
                <p className="mb-4">
                  For questions about these Terms or to request a project, please contact us at:
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

export default TermsOfService;
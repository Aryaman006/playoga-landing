import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Playoga Wellness & Education Private Limited ("Playoga," "we," "us," or "our") is committed to protecting your 
                  privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our website, mobile application, and services (collectively, the "Service").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold mt-4 mb-2">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Billing address and payment information</li>
                  <li>Profile information (age, gender, health goals)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you access our Service, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Device information (type, operating system, unique identifiers)</li>
                  <li>IP address and location data</li>
                  <li>Usage data (pages visited, features used, session duration)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Personalize your experience and recommend content</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf 
                    (payment processing, email delivery, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at care@playoga.co.in.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our Service. 
                  You can control cookie preferences through your browser settings. Please note that disabling 
                  certain cookies may affect the functionality of our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service is not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these external sites. We encourage you to review the privacy 
                  policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required by law. When we no longer 
                  need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of 
                  residence. We ensure that such transfers comply with applicable data protection laws and that 
                  appropriate safeguards are in place.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                  <p className="font-semibold">Playoga Wellness & Education Private Limited</p>
                  <p className="text-muted-foreground">Email: care@playoga.co.in</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">13. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                  you to review this Privacy Policy periodically for any changes.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

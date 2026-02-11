import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Terms = () => {
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
              Terms of <span className="text-gradient-gold">Service</span>
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
                <h2 className="text-2xl font-serif font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the Playoga platform, mobile application, or website (collectively, the "Service") 
                  operated by Playoga Wellness & Education Private Limited ("Company," "we," "us," or "our"), you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Playoga provides an online platform for yoga instruction, wellness content, live classes, and 
                  video-on-demand courses. Our Service includes but is not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Access to recorded yoga and wellness video content</li>
                  <li>Live streaming yoga classes and sessions</li>
                  <li>Disease management yoga therapy programs</li>
                  <li>Teacher training and certification courses</li>
                  <li>Community features and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features of the Service, you must create an account. You are responsible for 
                  maintaining the confidentiality of your account credentials and for all activities that occur 
                  under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. Subscription and Payments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Playoga offers subscription-based access to our content library. By subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Pay the applicable subscription fees as displayed at the time of purchase</li>
                  <li>Provide accurate and complete billing information</li>
                  <li>Authorize us to charge your payment method for recurring subscription fees</li>
                  <li>Subscription renewals occur automatically unless cancelled before the renewal date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Health Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The yoga and wellness content provided through Playoga is for educational and informational purposes only. 
                  It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult 
                  with a qualified healthcare provider before beginning any exercise program, especially if you have pre-existing 
                  health conditions. You acknowledge that you participate in our programs at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on the Playoga platform, including but not limited to videos, images, text, graphics, logos, 
                  and software, is the property of Playoga Wellness & Education Private Limited and is protected by copyright, trademark, 
                  and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works 
                  without our express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Share your account credentials with others</li>
                  <li>Download, copy, or redistribute our content without authorization</li>
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, 
                  without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, 
                  us, or third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Playoga Wellness & Education Private Limited shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising out of or relating to your 
                  use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
                  in Ahmedabad, Gujarat, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                  <p className="font-semibold">Playoga Wellness & Education Private Limited</p>
                  <p className="text-muted-foreground">Email: care@playoga.co.in</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any 
                  material changes by posting the new Terms of Service on this page and updating the "Last updated" date. 
                  Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;

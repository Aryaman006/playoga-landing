import React from "react";
// import { UserLayout } from "@/components/layout/UserLayout";
import Layout from "@/components/Layout";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="content-container py-12">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-display font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Email address and account information</li>
              <li>Subscription and payment transaction details</li>
              <li>App usage data (video progress, activity)</li>
              <li>Device information (device type, OS, app version)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To create and manage your account</li>
              <li>To process subscriptions and payments</li>
              <li>To provide premium content</li>
              <li>To improve app performance</li>
              <li>To provide customer support</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">3. Payments</h2>
            <p className="text-muted-foreground">
              All payments are securely processed via Razorpay. 
              We do not store your full credit or debit card details 
              on our servers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal data. We may share limited data 
              with secure third-party services such as Supabase (backend) 
              and Razorpay (payments) strictly for service functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground">
              We use encrypted connections (HTTPS) and secure authentication 
              systems to protect your data.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">6. Account Deletion</h2>
            <p className="text-muted-foreground">
              You may request deletion of your account by contacting us at:
            </p>
            <p className="mt-2 font-medium">
              📧 spaid.tech@gmail.com
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
            <p className="text-muted-foreground">
              Playoga is not intended for children under 13 years of age. 
              We do not knowingly collect data from children.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="mt-2 font-medium">
              📧 spaid.tech@gmail.com
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

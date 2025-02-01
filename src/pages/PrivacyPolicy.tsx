import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 sm:py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: February 02, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700">Welcome to KetoAI ("we," "our," "us"). Your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services. By accessing or using our Services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue the use of our Services immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect different types of information to enhance our Services and user experience. The data we collect includes but is not limited to:</p>
            
            <h3 className="text-xl font-bold mb-2">a. Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name, email address, phone number, billing address, and payment details when you register, make purchases, or interact with our Services.</li>
              <li>Account login credentials, including usernames and encrypted passwords.</li>
              <li>Any other personal information you provide when contacting customer support, filling out forms, or participating in surveys.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">b. Usage Data</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Information about how you access and use our Services, including IP address, browser type, operating system, device information, and timestamps.</li>
              <li>Interaction data such as pages visited, time spent on pages, and features used.</li>
              <li>Log files, error reports, and performance monitoring data.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">c. Cookies and Tracking Technologies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>We use cookies, web beacons, and similar tracking technologies to collect information about user interactions, analyze trends, and personalize content.</li>
              <li>Users can manage cookie preferences through their browser settings, but disabling cookies may impact Service functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To provide, operate, and improve our Services.</li>
              <li>To personalize user experience, deliver tailored content, and recommend keto-related resources.</li>
              <li>To process payments, send transaction confirmations, and prevent fraudulent activities.</li>
              <li>To communicate with users regarding support, account updates, security alerts, and promotional content (with user consent).</li>
              <li>To enforce our Terms of Service, comply with legal requirements, and protect against unauthorized activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, rent, or trade your personal information. However, we may share data under the following circumstances:</p>

            <h3 className="text-xl font-bold mb-2">a. Service Providers</h3>
            <p className="text-gray-700 mb-4">We engage third-party service providers to assist in operating our business, including payment processors, cloud storage providers, customer support platforms, and analytics providers. These third parties are contractually obligated to protect your data.</p>

            <h3 className="text-xl font-bold mb-2">b. Legal Compliance</h3>
            <p className="text-gray-700 mb-4">We may disclose personal data if required by law, regulation, or legal process, or if necessary to protect our rights, safety, and business interests.</p>

            <h3 className="text-xl font-bold mb-2">c. Business Transfers</h3>
            <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the transaction. We will notify users before any data transfer occurs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-gray-700">We implement industry-standard security measures, including encryption, access controls, and secure data storage, to safeguard your personal information. However, no data transmission over the internet is 100% secure. We advise users to use strong passwords and avoid sharing sensitive data in public forums.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access and Correction: Request access to or correction of inaccurate personal information.</li>
              <li>Deletion: Request the deletion of your data, subject to legal and operational obligations.</li>
              <li>Opt-Out: Opt out of marketing communications or limit certain data processing activities.</li>
              <li>Data Portability: Request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-gray-700 mt-4">To exercise any of these rights, please contact us at underdogs01@gmx.de. We will respond within the legally required timeframe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700">We use cookies to improve user experience, analyze website traffic, and personalize content. Users can manage their cookie preferences through browser settings. Disabling cookies may affect the functionality of our Services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700">Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage users to review third-party privacy policies before providing personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
            <p className="text-gray-700">We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Upon expiration of the retention period, data is securely deleted or anonymized.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data collection, we will take steps to remove the information promptly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. Any updates will be posted on this page with a revised "Last Updated" date. Your continued use of our Services constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:</p>
            <p className="text-gray-700 mt-2">
              KetoAI<br />
              Email: underdogs01@gmx.de
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 
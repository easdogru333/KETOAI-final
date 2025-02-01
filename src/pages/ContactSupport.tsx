import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactSupport = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:underdogs01@gmx.de";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 max-w-5xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Contact Support</h1>
        <p className="text-gray-600 mb-12 text-xl">We're here to help!</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Have questions, concerns, or need assistance with KetoAI? Our support team is ready to help you.
              You can reach us directly via email:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Email Support</h3>
              <p className="text-gray-700 text-lg mb-6">
                Send us an email and we'll get back to you within 24 hours:
              </p>
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-8 py-4 text-lg font-semibold font-outfit text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact via Email
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Support Hours</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our support team is available Monday through Friday, 9:00 AM to 5:00 PM (CET).
              We strive to respond to all inquiries within 24 hours during business days.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What to Include</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To help us assist you better, please include the following information in your email:
            </p>
            <ul className="list-disc pl-8 text-lg leading-relaxed text-gray-700 space-y-2">
              <li>Your name</li>
              <li>A detailed description of your issue or question</li>
              <li>Any relevant screenshots or information</li>
              <li>Steps to reproduce the issue (if applicable)</li>
              <li>Your device and browser information (if reporting a technical issue)</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSupport; 
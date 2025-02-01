import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <p className="font-handwritten text-xl mb-4">© 2025 KetoAI. All rights reserved.</p>
      <div className="flex justify-center gap-8">
        <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
        <Link to="/contact-support" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Support</Link>
      </div>
    </footer>
  );
};

export default Footer;
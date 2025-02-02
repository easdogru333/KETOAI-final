import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="py-4 sm:py-8 text-center">
      <p className="font-handwritten text-base sm:text-xl mb-2 sm:mb-4">© 2025 KetoAI. All rights reserved.</p>
      <div className="flex justify-center gap-4 sm:gap-8">
        <Link 
          to="/privacy-policy" 
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
          onClick={handleClick}
        >
          Privacy Policy
        </Link>
        <Link 
          to="/contact-support" 
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
          onClick={handleClick}
        >
          Contact Support
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
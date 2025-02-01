import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSecondaryPage = location.pathname === '/privacy-policy' || location.pathname === '/contact-support';

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const scrollToSection = (sectionId: string) => {
    if (isSecondaryPage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full bg-white/95 backdrop-blur-md z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-2 py-2 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between lg:hidden">
          <a href="/" className="text-lg font-bold font-outfit tracking-tight hover:text-gray-700 transition-colors">
            KetoAI
          </a>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-1.5`}>
          <div className="flex flex-col gap-0.5">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-black font-inter text-xs transition-colors py-1 text-left px-1"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-black font-inter text-xs transition-colors py-1 text-left px-1"
            >
              Features
            </button>
            {isSecondaryPage && (
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-xs py-1 text-left px-1"
              >
                Back to Home
              </button>
            )}
            <div className="pt-1">
              <a
                href="https://keto-ai.vercel.app/app"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-3 py-1.5 text-xs font-semibold font-outfit text-white shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
              >
                <span>Try Beta</span>
                <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center">
          <div className="w-1/4">
            <a href="/" className="text-3xl font-bold font-outfit tracking-tight hover:text-gray-700 transition-colors pl-2">
              KetoAI
            </a>
          </div>
          
          {/* Center Navigation */}
          <div className="w-2/4 flex justify-center gap-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-black font-inter text-sm transition-colors"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-black font-inter text-sm transition-colors"
            >
              Features
            </button>
          </div>

          {/* Right Buttons */}
          <div className="w-1/4 flex items-center justify-end gap-4">
            {isSecondaryPage && (
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm"
              >
                Back to Home
              </button>
            )}
            <a
              href="https://keto-ai.vercel.app/app"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-6 py-3 text-sm font-semibold font-outfit text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
            >
              <span>Try Beta</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
      className={`fixed w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-300 shadow-sm ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between lg:hidden">
          <a href="/" className="text-xl font-bold font-outfit tracking-tight text-gray-900 hover:text-black transition-all">
            KetoAI
          </a>
          <div className="flex items-center gap-4">
            <a
              href={`https://keto-ai.vercel.app/app?returnUrl=${encodeURIComponent(window.location.href)}`}
              className="inline-flex items-center justify-center rounded-full bg-black/95 px-4 py-2 text-sm font-medium font-outfit text-white shadow-sm hover:shadow-md transform hover:scale-102 transition-all duration-300"
            >
              <span>Try Beta</span>
              <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 text-gray-800 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col gap-3 bg-white/50 backdrop-blur-sm rounded-2xl p-3 mt-2">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-black font-inter text-base transition-all py-2.5 text-left px-3 rounded-xl hover:bg-gray-100/80"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-black font-inter text-base transition-all py-2.5 text-left px-3 rounded-xl hover:bg-gray-100/80"
            >
              Features
            </button>
            {isSecondaryPage && (
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-black transition-all font-inter text-base py-2.5 text-left px-3 rounded-xl hover:bg-gray-100/80"
              >
                Back to Home
              </button>
            )}
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
              href={`https://keto-ai.vercel.app/app?returnUrl=${encodeURIComponent(window.location.href)}`}
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
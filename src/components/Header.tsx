import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">
              KetoAI
            </Link>
          </div>
          <nav className="flex items-center space-x-8">
            <a 
              href="https://landingpage-aktuell.vercel.app"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </a>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <a
              href="https://keto-ai.vercel.app/app"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-black hover:bg-gray-900"
            >
              Try Beta
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
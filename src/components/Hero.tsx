const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-white">
      <div className="relative max-w-[1600px] mx-auto px-2 sm:px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Smaller heading for mobile, original size for desktop */}
          <h1 className="text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-bold font-outfit tracking-tight leading-[1.1] sm:leading-[1] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
              Track your Keto diet simply
            </span>
          </h1>

          {/* Smaller subtitle for mobile */}
          <p className="text-base sm:text-2xl text-gray-600 mb-8 sm:mb-12 font-inter leading-relaxed">
            Take a photo of your meal and let AI calculate your keto macros. Precise, fast and easy to use.
          </p>

          {/* Enhanced App Store button */}
          <div className="relative inline-flex flex-col items-center">
            {/* Modern status badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-full border border-gray-900 shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition-all duration-500 ease-out">
                <span className="relative flex h-2 w-2">
                  <span className="inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-sm font-medium text-black">Coming to App Store</span>
              </div>
            </div>

            {/* Button container */}
            <div className="group relative">
              {/* Main button */}
              <div className="relative bg-black rounded-2xl transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02]">
                {/* Button content */}
                <div className="relative px-8 py-4">
                  <img 
                    src="/lovable-uploads/14f2f9ec-eeb3-423e-b631-3138847c3110.png" 
                    alt="Download on the App Store" 
                    className="h-14 sm:h-16 transform transition-all duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Bright red Coming Soon badge */}
                <div className="absolute -top-2 -right-2 transform rotate-12">
                  <div className="bg-[#FF0000] px-4 py-1.5 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-white tracking-wide uppercase">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-16 top-1/2 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -right-16 top-1/2 w-32 h-32 bg-gradient-to-bl from-gray-900/5 to-transparent rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
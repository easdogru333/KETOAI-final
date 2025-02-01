const Hero = () => {
  return (
    <section className="pt-20 pb-16">
      <div className="max-w-[1000px] mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-[65px] font-bold mb-6 font-outfit tracking-tighter leading-[1.1] text-black">
          Track your Keto diet simply
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
          Take a photo of your meal and let AI calculate your keto macros.
          <br />
          Precise, fast and easy to use.
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-2 rounded-full">
            <span className="text-red-500 font-inter font-medium tracking-wide text-sm uppercase">Coming soon</span>
          </div>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform translate-y-1">
            <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.39339C28.9289 0.807609 27.9792 0.807609 27.3934 1.39339C26.8076 1.97917 26.8076 2.92892 27.3934 3.51471L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#4B5563"/>
          </svg>
          <div className="bg-black rounded-full px-6 py-3 hover:bg-gray-900 transition-colors transform hover:scale-105 duration-200">
            <img 
              src="/lovable-uploads/14f2f9ec-eeb3-423e-b631-3138847c3110.png" 
              alt="Download on the App Store" 
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
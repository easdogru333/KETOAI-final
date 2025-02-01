const WhyKetoAI = () => {
  return (
    <section className="py-8 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Title only visible on desktop */}
        <h2 className="hidden sm:block text-4xl font-bold text-center mb-8 font-outfit tracking-tight -mt-8">Why KetoAI?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Image moved up for mobile */}
          <div className="block md:hidden -mt-4 mb-8">
            <div className="w-full">
              <img 
                src="/lovable-uploads/2cc9bb37-8a25-471d-94c4-1c4084989d0f.png" 
                alt="KetoAI App Screenshot" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-16">
            <div className="flex gap-4 sm:gap-6 bg-white/50 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/60 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 text-base shadow-md">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-outfit">Time-Saving</h3>
                <p className="text-base text-gray-600">
                  No more manual tracking - instantly analyze your meals with a single photo
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6 bg-white/50 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/60 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 text-base shadow-md">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-outfit">Accurate Results</h3>
                <p className="text-base text-gray-600">
                  Our AI provides precise macro calculations for your keto diet
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6 bg-white/50 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/60 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 text-base shadow-md">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-outfit">Smart Recommendations</h3>
                <p className="text-base text-gray-600">
                  Get personalized suggestions to optimize your keto journey
                </p>
              </div>
            </div>
          </div>
          
          {/* Image for desktop view */}
          <div className="hidden md:flex justify-end pt-[2px]">
            <div className="w-[95%]">
              <img 
                src="/lovable-uploads/2cc9bb37-8a25-471d-94c4-1c4084989d0f.png" 
                alt="KetoAI App Screenshot" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKetoAI;
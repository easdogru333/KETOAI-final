const WhyKetoAI = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 font-outfit tracking-tight -mt-4 sm:-mt-8">Why KetoAI?</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-8 sm:space-y-16">
            <div className="flex gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Time-Saving</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  No more manual tracking - instantly analyze your meals with a single photo
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Accurate Results</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our AI provides precise macro calculations for your keto diet
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Smart Recommendations</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Get personalized suggestions to optimize your keto journey
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-4 sm:pt-[2px]">
            <div className="max-w-[95%] sm:max-w-[90%]">
              <img 
                src="/lovable-uploads/2cc9bb37-8a25-471d-94c4-1c4084989d0f.png" 
                alt="KetoAI App Screenshot" 
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKetoAI;
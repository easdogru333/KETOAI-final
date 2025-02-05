const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="bg-white backdrop-blur-sm rounded-[20px] sm:rounded-[40px] border border-gray-200 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-bold text-center pt-8 sm:pt-12 mb-6 sm:mb-12 font-outfit tracking-tight">How KetoAI Works</h2>
          <div className="px-4 sm:px-12 pb-8 sm:pb-12">
            <div className="grid gap-8 sm:gap-12">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-outfit">Quick & Easy Tracking</h3>
                  <p className="text-gray-600 font-inter">Simply take a photo of your meal or upload an image.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-outfit">Instant AI Analysis</h3>
                  <p className="text-gray-600 font-inter">Our advanced AI technology instantly identifies foods, estimates portions, and calculates your macronutrients with high accuracy.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-outfit">Personalized Insights</h3>
                  <p className="text-gray-600 font-inter">Get personalized recommendations and insights based on your specific dietary requirements and keto goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-8 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16 font-outfit tracking-tight">
          How KetoAI Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div className="md:flex">
            <div className="w-[95%]">
              <img 
                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef" 
                alt="Juicy pan-seared steak with fresh herbs" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col justify-between h-full py-4">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-outfit">Quick & Easy Tracking</h3>
                <p className="text-gray-600 text-lg">
                  Simply take a photo of your meal or upload an image.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-outfit">Instant AI Analysis</h3>
                <p className="text-gray-600 text-lg">
                  Our advanced AI technology instantly identifies foods, estimates portions, and calculates your macronutrients with high accuracy.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 font-outfit">Personalized Insights</h3>
                <p className="text-gray-600 text-lg">
                  Get personalized recommendations and insights based on your specific dietary requirements and keto goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
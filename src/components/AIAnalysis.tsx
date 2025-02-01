const AIAnalysis = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-6 font-outfit leading-tight">
                Precise AI Analysis for Your Keto Diet
              </h2>
              <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
                Our AI has been trained with thousands of keto meals and delivers precise results for your nutritional goals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-8">
                <div className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-3">95%</div>
                <div className="text-gray-400 text-sm sm:text-base">Accuracy for Keto Meals</div>
              </div>
              
              <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-8">
                <div className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-3">3s</div>
                <div className="text-gray-400 text-sm sm:text-base">Average Analysis Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalysis;
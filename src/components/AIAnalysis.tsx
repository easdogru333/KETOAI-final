const AIAnalysis = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 font-outfit leading-tight">
                Precise AI Analysis for Your Keto Diet
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our AI has been trained with thousands of keto meals and delivers precise results for your nutritional goals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111] rounded-2xl p-8">
                <div className="text-6xl font-bold mb-3">95%</div>
                <div className="text-gray-400">Accuracy for Keto Meals</div>
              </div>
              
              <div className="bg-[#111] rounded-2xl p-8">
                <div className="text-6xl font-bold mb-3">3s</div>
                <div className="text-gray-400">Average Analysis Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalysis;
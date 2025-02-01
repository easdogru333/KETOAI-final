const WhyKetoAI = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-outfit tracking-tight -mt-8">Why KetoAI?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-16">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
                <p className="text-gray-600">
                  No more manual tracking - instantly analyze your meals with a single photo
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accurate Results</h3>
                <p className="text-gray-600">
                  Our AI provides precise macro calculations for your keto diet
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Get personalized suggestions to optimize your keto journey
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-[2px]">
            <div className="max-w-[90%]">
              <img 
                src="/lovable-uploads/2cc9bb37-8a25-471d-94c4-1c4084989d0f.png" 
                alt="KetoAI App Screenshot" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKetoAI;
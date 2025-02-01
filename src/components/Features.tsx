const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-b from-white to-gray-50/50 rounded-[40px] border border-gray-200 shadow-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-4 font-outfit tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Features</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-inter text-lg leading-relaxed">
            KetoAI makes tracking your keto diet effortless with advanced AI technology. Unlike traditional food tracking apps, our AI automatically identifies your food and calculates macros instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-outfit">Take a Photo</h3>
              <p className="text-gray-600 font-inter leading-relaxed">Simply take a photo of your meal</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16l4-4m0 0l-4-4m4 4H8m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-outfit">AI Analysis</h3>
              <p className="text-gray-600 font-inter leading-relaxed">Our AI analyzes ingredients instantly</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-outfit">Get Macros</h3>
              <p className="text-gray-600 font-inter leading-relaxed">See detailed macro breakdown</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8v8m-8-5v5M12 3v18m0-18l3.5 3.5M12 3L8.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-outfit">Track Progress</h3>
              <p className="text-gray-600 font-inter leading-relaxed">Monitor your keto progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

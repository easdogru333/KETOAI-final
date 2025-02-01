const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="bg-white backdrop-blur-sm rounded-[20px] sm:rounded-[40px] border border-gray-200 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-bold text-center pt-8 sm:pt-12 mb-6 sm:mb-8 font-outfit tracking-tight">How KetoAI Works</h2>
          <div className="px-4 sm:px-12 pb-8 sm:pb-12">
            <p className="text-sm sm:text-lg mb-4 sm:mb-8 font-inter text-gray-600 leading-relaxed">
              Tracking your keto diet has never been easier. KetoAI combines advanced artificial intelligence with an intuitive user interface to revolutionize how you monitor your nutritional intake. Our technology understands the complexities of ketogenic dieting and provides you with instant, accurate analysis of your meals.
            </p>
            <p className="text-sm sm:text-lg mb-4 sm:mb-8 font-inter text-gray-600 leading-relaxed">
              Unlike traditional food tracking apps that require manual input and endless scrolling through databases, KetoAI uses computer vision and machine learning to identify foods, estimate portions, and calculate macronutrients automatically. This means you can spend less time logging meals and more time focusing on your health goals.
            </p>
            <p className="text-sm sm:text-lg font-inter text-gray-600 leading-relaxed">
              Whether you're new to keto or an experienced practitioner, our app adapts to your needs, providing personalized insights and recommendations based on your specific dietary requirements and goals. Here's how our streamlined process works:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
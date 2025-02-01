const StartWithKetoAI = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] border border-gray-200 shadow-lg p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 font-outfit tracking-tight">Start with KetoAI</h2>
          <p className="text-gray-600 mb-12 font-inter text-lg leading-relaxed">
            Simplify your Keto diet with AI-powered analysis and reach your goals faster
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              disabled
              className="text-gray-600 hover:text-gray-700 font-inter text-sm transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              iOS App Coming Soon
            </button>
            <a 
              href="https://keto-ai.vercel.app/app"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-8 py-4 text-base font-semibold font-outfit text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
            >
              <span>Try Beta</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithKetoAI; 
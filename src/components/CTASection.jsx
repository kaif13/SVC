const CTASection = ({ onOpenModal }) => {
  return (
    <div className="bg-primary-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Join thousands of successful students who have built their careers
            with our comprehensive education programs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenModal}
              className="bg-accent-600 text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 transition-colors"
            >
              Apply for Admission
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-primary-900 px-8 py-4 text-lg font-semibold rounded-md hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Step 1</div>
              <div className="text-primary-200">Submit Application</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Step 2</div>
              <div className="text-primary-200">Entrance Exam</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Step 3</div>
              <div className="text-primary-200">Join Our Community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

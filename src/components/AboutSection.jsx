import { collegeData } from "../data/collegeData";

const AboutSection = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              About {collegeData.name}
            </h2>
            <p className="mt-6 text-lg text-secondary-600 leading-relaxed">
              {collegeData.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary-600">
                  {collegeData.established}
                </div>
                <div className="text-secondary-600">Established</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">
                  {collegeData.location.split(",")[0]}
                </div>
                <div className="text-secondary-600">Location</div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                To provide quality education that empowers students to become
                responsible citizens, critical thinkers, and leaders in their
                chosen fields. We strive to create an environment that fosters
                academic excellence, personal growth, and social responsibility.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Our Vision
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                To be a premier educational institution recognized for academic
                excellence, innovative research, and commitment to holistic
                development of students.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
                alt="College Campus"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-secondary-900">
                    {collegeData.stats.courses}
                  </div>
                  <div className="text-secondary-600 text-sm">
                    Academic Programs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

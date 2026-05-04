import { collegeData } from "../data/collegeData";

const Hero = ({ onOpenModal }) => {
  return (
    <div
      className="relative overflow-hidden min-h-[90vh] bg-primary-950 text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.98) 24%, rgba(30, 41, 59, 0.96) 40%, rgba(15, 23, 42, 0.96) 100%), radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.2) 0%, transparent 35%), radial-gradient(circle at 82% 14%, rgba(245, 158, 11, 0.16) 0%, transparent 32%)",
        backgroundColor: "#0f172a",
        backgroundSize: "100% 100%, 220% 220%, 180% 180%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center, top left, top right",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {collegeData.name}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-200 sm:text-2xl">
            {collegeData.tagline}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            {collegeData.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onOpenModal}
              className="rounded-full bg-amber-400 px-10 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/25 bg-white/5 px-10 py-4 text-lg font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Learn More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {collegeData.stats.students}
              </div>
              <div className="mt-2 text-primary-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {collegeData.stats.faculty}
              </div>
              <div className="mt-2 text-primary-200">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {collegeData.stats.courses}
              </div>
              <div className="mt-2 text-primary-200">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {collegeData.stats.placements}
              </div>
              <div className="mt-2 text-primary-200">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 text-slate-50">
          <path
            fill="currentColor"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

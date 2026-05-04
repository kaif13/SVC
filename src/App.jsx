import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import Courses from "./components/Courses";
import CampusGallery from "./components/CampusGallery";
import CTASection from "./components/CTASection";
import ResultsPage from "./components/ResultsPage";
import ResultSheet from "./components/ResultSheet";
import ApplyModal from "./components/ApplyModal";

function App() {
  const [rollQuery, setRollQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("roll") || "";
  });
  const [page, setPage] = useState(() => (rollQuery ? "resultSheet" : "home"));
  const [scrollTarget, setScrollTarget] = useState("hero");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (page === "home" && scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Use requestAnimationFrame to reset after scrolling animation
        requestAnimationFrame(() => {
          setTimeout(() => setScrollTarget(null), 500);
        });
      }
    }
  }, [page, scrollTarget]);

  const handleNavigate = (target) => {
    if (target === "results") {
      setPage("results");
      setRollQuery("");
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      setPage("home");
      setScrollTarget(target);
      setRollQuery("");
      window.history.replaceState({}, "", window.location.pathname);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <Navbar
        activePage={page}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
      />

      <ApplyModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {page === "resultSheet" ? (
        <ResultSheet rollNumber={rollQuery} />
      ) : page === "home" ? (
        <main className="w-full pb-16 pt-6">
          <section id="hero" className="pt-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <Hero onOpenModal={handleOpenModal} />
            </div>
          </section>
          <section id="stats" className="mt-20 px-4 sm:px-6 lg:px-8">
            <Stats />
          </section>
          <section id="about" className="mt-20 px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </section>
          <section id="courses" className="mt-20 px-4 sm:px-6 lg:px-8">
            <Courses />
          </section>
          <section id="campus" className="mt-20 px-4 sm:px-6 lg:px-8">
            <CampusGallery />
          </section>
          <section id="admissions" className="mt-20 px-4 sm:px-6 lg:px-8">
            <CTASection onOpenModal={handleOpenModal} />
          </section>
          <footer
            id="footer"
            className="mt-20 border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Swami Vivekanand College
                </h3>
                <p className="text-secondary-600 mb-4 max-w-md">
                  Excellence in Education, Excellence in Life. Join our
                  community of learners and achievers.
                </p>
                <div className="space-y-2 text-sm text-secondary-600">
                  <p>
                    📍 123 University Road, Lucknow, Uttar Pradesh 226001, India
                  </p>
                  <p>📞 +91 522 123 4567</p>
                  <p>✉️ info@svcollege.edu.in</p>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <button
                    onClick={() => handleNavigate("about")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavigate("courses")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    Academics
                  </button>
                  <button
                    onClick={() => handleNavigate("admissions")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    Admissions
                  </button>
                  <button
                    onClick={() => handleNavigate("results")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    Results
                  </button>
                  <button
                    onClick={() => handleNavigate("campus")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    Campus Life
                  </button>
                  <button
                    onClick={() => handleNavigate("footer")}
                    className="text-secondary-600 hover:text-primary-600 text-left"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-secondary-400 hover:text-primary-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-secondary-400 hover:text-primary-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-secondary-400 hover:text-primary-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-secondary-400 hover:text-primary-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-sm text-secondary-500">
                © 2024 Swami Vivekanand College. All rights reserved. | Demo
                website • All content is fictional.
              </p>
            </div>
          </footer>
        </main>
      ) : (
        <ResultsPage />
      )}
    </div>
  );
}

export default App;

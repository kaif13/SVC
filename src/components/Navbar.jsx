import { useState } from "react";

const Navbar = ({ activePage, onNavigate, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "hero" },
    {
      name: "About",
      href: "about",
      dropdown: [
        { name: "About College", href: "about" },
        { name: "Vision & Mission", href: "about" },
        { name: "Leadership", href: "about" },
      ],
    },
    {
      name: "Academics",
      href: "courses",
      dropdown: [
        { name: "Courses", href: "courses" },
        { name: "Departments", href: "courses" },
        { name: "Faculty", href: "courses" },
      ],
    },
    { name: "Admissions", href: "admissions" },
    {
      name: "Campus Life",
      href: "campus",
      dropdown: [
        { name: "Facilities", href: "campus" },
        { name: "Events", href: "campus" },
        { name: "Gallery", href: "campus" },
      ],
    },
    { name: "Results", href: "results" },
    { name: "Contact", href: "footer" },
  ];

  const handleNavClick = (item) => {
    if (item.href === "results") {
      onNavigate("results");
    } else {
      onNavigate(item.href);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg border-b border-primary-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick({ href: "hero" })}
              className="flex items-center space-x-2 text-xl font-bold text-primary-800 hover:text-primary-600 transition-colors"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SVC</span>
              </div>
              <span>Swami Vivekanand College</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center px-3 py-2 text-sm font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md transition-colors">
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavClick(subItem)}
                                className="block w-full text-left px-4 py-2 text-sm text-primary-700 hover:bg-primary-50 hover:text-primary-900"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activePage === "home" && item.href === "hero"
                          ? "text-primary-900 bg-primary-100"
                          : "text-primary-700 hover:text-primary-900 hover:bg-primary-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="bg-accent-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-700 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-700 hover:text-primary-900 hover:bg-primary-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-primary-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button className="flex items-center w-full px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md">
                      {item.name}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem)}
                          className="block w-full text-left px-3 py-2 text-sm text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="w-full bg-accent-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-accent-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

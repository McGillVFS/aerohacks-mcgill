
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  const navLinks = [
    { name: "About", anchor: "about" },
    { name: "Prizes", anchor: "prizes" },
    { name: "Sponsors", anchor: "sponsors" },
    { name: "Register", anchor: "register", highlight: true }
  ];

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20" role="navigation" aria-label="Main navigation">
        <div className="w-full mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group" aria-label="McGill AeroHacks Home">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
              </div>
              <div className="min-w-0 pl-10">
                <span className="text-base md:text-xl font-bold text-white block truncate uppercase tracking-wide">McGill AeroHacks</span>
                <p className="text-[10px] md:text-xs text-red-500 font-mono">03/13-03/15</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                link.highlight ? (
                  <button
                    key={link.anchor}
                    onClick={() => scrollToSection(link.anchor)}
                    className="px-4 lg:px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-all shadow-lg shadow-red-500/50 hover:shadow-red-500/70 text-sm lg:text-base uppercase font-mono border-2 border-red-500"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <button
                    key={link.anchor}
                    onClick={() => scrollToSection(link.anchor)}
                    className="font-bold transition-colors text-sm lg:text-base uppercase font-mono text-gray-300 hover:text-red-500"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-red-500 flex-shrink-0"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t-2 border-cyan-500/50 pt-3">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.anchor}
                    onClick={() => scrollToSection(link.anchor)}
                    className={`px-4 py-2.5 rounded font-bold transition-colors text-sm uppercase font-mono border-2 ${
                      link.highlight
                        ? "bg-red-600 text-white border-red-500"
                        : "text-gray-300 hover:bg-cyan-500/20 border-transparent hover:border-cyan-500/50"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content with padding for fixed nav */}
      <main className="pt-[72px] md:pt-20">
        {children}
      </main>
    </div>
  );
}

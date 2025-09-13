"use client";

import { useState, useEffect } from "react";
import { Bitcoin, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 transition-all duration-300">
      <div
        className={`bg-black/20 backdrop-blur-md border border-white/20 rounded-full px-6 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bitcoin className="h-6 w-6 text-white" />
              <Sparkles className="h-2 w-2 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-lg font-bold text-white">Bitcoin Kids</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm-system text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/library"
              className="text-sm-system text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Library
            </Link>
            <a
              href="#"
              className="text-sm-system text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Kids Corner
            </a>
            <a
              href="#"
              className="text-sm-system text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              About
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              Login
            </Button>
            <Button variant="white" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-white/80 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="space-y-3">
              <Link
                to="/"
                className="block px-3 py-2 text-sm-system text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/library"
                className="block px-3 py-2 text-sm-system text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                Library
              </Link>
              <a
                href="#"
                className="block px-3 py-2 text-sm-system text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                Kids Corner
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm-system text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                About
              </a>

              <div className="pt-4 space-y-2 border-t border-white/20">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-white hover:bg-white/10"
                >
                  Login
                </Button>
                <Button variant="white" className="w-full justify-center">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

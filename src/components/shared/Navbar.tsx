"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SignupForm } from "@/components/ui/SignupForm";
import logo from "@/assets/logo.Png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src={logo}
              alt="Bitcoin Kids Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">
              Bitcoin Kids
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm-system text-gray-700 hover:text-gray-800 transition-colors font-bold cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/library"
              className="text-sm-system text-gray-700 hover:text-gray-800 transition-colors font-bold cursor-pointer"
            >
              Library
            </Link>
            <a
              href="#"
              className="text-sm-system text-gray-700 hover:text-gray-800 transition-colors font-bold cursor-pointer"
            >
              Kids Corner
            </a>
            <a
              href="#"
              className="text-sm-system text-gray-700 hover:text-gray-800 transition-colors font-bold cursor-pointer"
            >
              About
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="default"
              className="text-sm-system text-gray-700 cursor-pointer"
            >
              Login
            </Button>
            <SignupForm>
              <Button
                variant="primary"
                size="default"
                className="text-sm-system cursor-pointer"
              >
                Sign Up
              </Button>
            </SignupForm>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-sm-system text-gray-700 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-sm-system text-gray-700 hover:text-gray-800 font-bold cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/library"
                className="block px-3 py-2 text-sm-system text-gray-700 hover:text-gray-800 font-bold cursor-pointer"
              >
                Library
              </Link>
              <a
                href="#"
                className="block px-3 py-2 text-sm-system text-gray-700 hover:text-gray-800 font-bold cursor-pointer"
              >
                Kids Corner
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm-system text-gray-700 hover:text-gray-800 font-bold cursor-pointer"
              >
                About
              </a>

              <div className="pt-4 space-y-2 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="default"
                  className="text-sm-system w-full justify-center cursor-pointer"
                >
                  Login
                </Button>
                <SignupForm>
                  <Button
                    variant="primary"
                    size="default"
                    className="text-sm-system w-full justify-center cursor-pointer"
                  >
                    Sign Up
                  </Button>
                </SignupForm>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

"use client";

import { useState } from "react";
import { Bitcoin, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bitcoin className="h-8 w-8 text-primary" />
              <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bitcoin Kids
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Library
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kids Corner
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Login
            </Button>
            <Button variant="purpleOutline" className="rounded-full px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground"
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
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Library
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Kids Corner
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                About
              </a>

              <div className="pt-4 space-y-2 border-t border-border">
                <Button variant="outline" className="w-full justify-center">
                  Login
                </Button>
                <Button
                  variant="purpleOutline"
                  className="w-full justify-center rounded-full"
                >
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

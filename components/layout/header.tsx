"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="font-playfair text-2xl font-bold text-saree-primary">Mrunali</span>
            <span className="font-playfair text-2xl font-light text-saree-dark">Collections</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-saree-primary">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-saree-primary">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-saree-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-saree-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6 pb-32 shadow-md md:hidden",
            {
              "hidden": !isMenuOpen,
            }
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-lg font-medium transition-colors hover:text-saree-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-lg font-medium transition-colors hover:text-saree-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-lg font-medium transition-colors hover:text-saree-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-lg font-medium transition-colors hover:text-saree-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-saree-light py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-saree-dark tracking-tight">
              Timeless Elegance <br />
              <span className="text-saree-primary">In Every Drape</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Discover our exquisite collection of handcrafted sarees, each telling a unique story of tradition, artistry, and elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="saree" size="lg" asChild>
                <Link href="/products">
                  Explore Collection
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] flex items-center justify-center overflow-hidden rounded-lg">
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
              <div className="flex flex-col gap-4">
                <div className="aspect-square rounded-lg bg-saree-accent/20 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-saree-primary/30"></div>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-lg bg-saree-primary/10 overflow-hidden relative flex items-end justify-center pb-4">
                  <div className="h-36 w-36 rounded-full bg-saree-secondary/30"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="aspect-[4/5] rounded-lg bg-saree-primary/10 overflow-hidden relative flex items-start justify-center pt-4">
                  <div className="h-36 w-36 rounded-full bg-saree-primary/30"></div>
                </div>
                <div className="aspect-square rounded-lg bg-saree-accent/20 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-saree-secondary/30"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full overflow-hidden bg-saree-primary/40 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 md:h-56 md:w-56 rounded-full bg-saree-light flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-saree-primary font-playfair font-medium text-lg">Elegant</p>
                    <p className="text-saree-dark font-playfair font-bold text-3xl">Sarees</p>
                    <p className="text-saree-secondary text-sm mt-1">Handcrafted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/hero-section";
import FeaturedProducts from "@/components/home/featured-products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getNewArrivals } from "@/lib/data";
import ProductCard from "@/components/product/product-card";

export default function Home() {
  const newArrivals = getNewArrivals();

  return (
    <div>
      <HeroSection />

      <FeaturedProducts />

      {/* Categories Section */}
      <section className="py-16 bg-saree-light">
        <div className="container">
          <h2 className="text-3xl font-playfair font-medium text-center text-saree-dark mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] flex items-center justify-center bg-saree-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-playfair font-medium text-saree-dark mb-2">
                    Silk Sarees
                  </h3>
                  <Button variant="saree" asChild>
                    <Link href="/products?type=silk">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] flex items-center justify-center bg-saree-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-playfair font-medium text-saree-dark mb-2">
                    Cotton Sarees
                  </h3>
                  <Button variant="saree" asChild>
                    <Link href="/products?type=cotton">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4] flex items-center justify-center bg-saree-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-playfair font-medium text-saree-dark mb-2">
                    Designer Sarees
                  </h3>
                  <Button variant="saree" asChild>
                    <Link href="/products?occasion=party">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-playfair font-medium text-center text-saree-dark mb-12">
              New Arrivals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.map((saree) => (
                <ProductCard key={saree.id} saree={saree} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16 bg-saree-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative rounded-full overflow-hidden bg-white p-8">
              <div className="h-full w-full rounded-full bg-saree-accent/30 flex items-center justify-center">
                <div className="text-center max-w-xs">
                  <p className="text-saree-dark font-playfair text-3xl mb-4">Our Story</p>
                  <p className="text-gray-600 text-sm">
                    With generations of expertise in textiles, we bring you authentic sarees crafted with love and tradition.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-medium text-saree-dark">
                Handcrafted with Love & Tradition
              </h2>
              <p className="text-gray-600">
                Our collection celebrates the rich heritage of Indian textiles and craftsmanship. 
                Each saree in our collection tells a unique story of artisans who have dedicated 
                their lives to perfecting their craft.
              </p>
              <p className="text-gray-600">
                We work directly with weavers across India to bring you authentic, high-quality 
                sarees that blend traditional techniques with contemporary designs.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-saree-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-playfair font-medium mb-4">
            Have Questions?
          </h2>
          <p className="mb-8 max-w-xl mx-auto">
            Contact us directly on WhatsApp for personalized assistance with your saree selection.
          </p>
          <Button 
            variant="outline" 
            className="bg-white text-saree-primary hover:bg-saree-light border-white"
            asChild
          >
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

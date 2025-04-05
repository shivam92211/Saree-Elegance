import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getFeaturedSarees } from "@/lib/data";
import ProductCard from "@/components/product/product-card";

const FeaturedProducts = () => {
  const featuredSarees = getFeaturedSarees();

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-playfair font-medium text-saree-dark">Featured Collection</h2>
            <p className="text-saree-secondary mt-2">Discover our most loved sarees</p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center text-sm font-medium text-saree-primary hover:text-saree-secondary"
          >
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredSarees.map((saree) => (
            <ProductCard key={saree.id} saree={saree} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/products"
            className="flex items-center text-sm font-medium text-saree-primary hover:text-saree-secondary"
          >
            View All Products
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

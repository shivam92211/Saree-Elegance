import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About Us</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-playfair font-medium text-saree-dark text-center mb-8">Our Story</h1>
        
        <div className="aspect-square w-48 md:w-64 relative rounded-full overflow-hidden bg-saree-light p-4 mb-8 mx-auto">
          <div className="h-full w-full rounded-full bg-saree-accent/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-saree-dark font-playfair text-lg">Est.</p>
              <p className="text-saree-primary font-playfair font-bold text-2xl">2025</p>
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to <span className="text-saree-primary font-medium">Mrunal Collections</span>, where tradition meets contemporary fashion. Our journey began with a simple passion: to showcase the rich heritage of Indian sarees to the world.
          </p>
          
          <p>
            Founded in 2015, we started as a small family business with deep roots in the textile industry. Our founder, with over two decades of experience working with artisans across India, created this platform to bridge the gap between skilled weavers and saree enthusiasts globally.
          </p>
          
          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Our Mission</h2>
          <p>
            We are committed to preserving and promoting the art of traditional saree weaving while ensuring that the artisans behind these beautiful creations receive fair compensation for their craft. Each saree in our collection tells a story – of heritage, of craftsmanship, and of the hands that brought it to life.
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-xl font-medium text-saree-dark mb-4">The Craft</h3>
              <p>
                We work directly with weavers from various regions of India, including Banaras, Kanchipuram, and Bengal. By eliminating middlemen, we ensure better livelihoods for artisans while offering authentic, high-quality sarees to our customers at reasonable prices.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-saree-dark mb-4">Our Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Authenticity in every thread</li>
                <li>Fair trade practices with all our artisans</li>
                <li>Preservation of traditional weaving techniques</li>
                <li>Exceptional customer service</li>
                <li>Sustainable and ethical fashion</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Our Collection</h2>
          <p>
            Our carefully curated collection includes a wide range of sarees – from everyday cotton and linen pieces to exquisite silk and designer sarees for special occasions. Each piece is handpicked for its quality, craftsmanship, and uniqueness.
          </p>
          
          <p>
            We take pride in offering both traditional designs that honor centuries-old weaving traditions and contemporary styles that appeal to the modern woman. Whether you're looking for your first saree or adding to your collection, we have something special for everyone.
          </p>
          
          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Connect With Us</h2>
          <p>
            We believe in building personal connections with our customers. That's why we've made it easy to reach us directly through WhatsApp, where we can provide personalized assistance, answer your questions, and help you find the perfect saree for any occasion.
          </p>
          
          <p className="mt-8 text-center font-playfair text-lg text-saree-secondary">
            Thank you for being part of our journey as we continue to celebrate the timeless elegance of sarees.
          </p>
        </div>
      </div>
    </div>
  );
}

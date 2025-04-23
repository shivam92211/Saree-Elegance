// @ts-nocheck

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSareeById, getAllSarees } from "@/lib/data";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductGallery from "@/components/product/product-gallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

interface ProductPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const sarees = await getAllSarees();
  
  return sarees.map((saree) => ({
    id: saree.id,
  }));
}


// @ts-ignore
export default async function ProductPage({ params }: any) {
  const saree = await getSareeById(params.id);
  
  if (!saree) {
    notFound();
  }

  const whatsappLink = generateWhatsAppLink(saree.id, saree.name);

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{saree.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Gallery */}
        <ProductGallery images={saree.images} productName={saree.name} />

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-playfair font-medium text-saree-dark">{saree.name}</h1>
            
            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-semibold text-saree-primary">
                {formatPrice(saree.discountPrice || saree.price)}
              </span>
              {saree.discountPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(saree.price)}
                </span>
              )}
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="type">{saree.type}</Badge>
              {saree.occasion.map(occasion => (
                <Badge key={occasion} variant="occasion">{occasion}</Badge>
              ))}
              {saree.color.map(color => (
                <Badge key={color} variant="color">{color}</Badge>
              ))}
            </div>
          </div>

          <Separator />
          
          <div>
            <h2 className="text-lg font-medium mb-2">Description</h2>
            <p className="text-gray-600">{saree.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Material</h3>
              <p className="mt-1 text-sm text-gray-500">{saree.material}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Length</h3>
              <p className="mt-1 text-sm text-gray-500">{saree.length}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Blouse Piece</h3>
              <p className="mt-1 text-sm text-gray-500">
                {saree.blousePiece ? "Included" : "Not Included"}
              </p>
            </div>
            {saree.blouseDetails && (
              <div>
                <h3 className="text-sm font-medium text-gray-900">Blouse Details</h3>
                <p className="mt-1 text-sm text-gray-500">{saree.blouseDetails}</p>
              </div>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="care">
              <AccordionTrigger>Care Instructions</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {saree.careInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pt-4">
            <Button 
              variant="saree" 
              size="lg" 
              className="w-full"
              disabled={!saree.inStock}
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {saree.inStock ? "Buy" : "Out of Stock"}
              </a>
            </Button>
            
            {!saree.inStock && (
              <p className="text-center text-sm text-gray-500 mt-2">
                This product is currently out of stock. Please check back later.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section could be added here */}
    </div>
  );
}

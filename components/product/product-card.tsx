import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatPrice } from "@/lib/utils";
import { Saree } from "@/lib/data";

interface ProductCardProps {
  saree: Saree;
}

const ProductCard = ({ saree }: ProductCardProps) => {
  return (
    <Link href={`/products/${saree.id}`} className="group">
      <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
        <div className="relative">
          <AspectRatio ratio={3/4} className="bg-saree-light">
            <Image
              src={saree.images[0].src}
              alt={saree.images[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </AspectRatio>
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {saree.new && (
              <Badge variant="saree" className="text-xs">New Arrival</Badge>
            )}
            {!saree.inStock && (
              <Badge variant="secondary" className="text-xs">Out of Stock</Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-sm line-clamp-1 text-gray-900">{saree.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold text-saree-primary">
              {formatPrice(saree.discountPrice || saree.price)}
            </span>
            {saree.discountPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(saree.price)}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
          <Badge variant="type" className="text-xs">{saree.type}</Badge>
          {saree.occasion.slice(0, 1).map(occasion => (
            <Badge key={occasion} variant="occasion" className="text-xs">
              {occasion}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

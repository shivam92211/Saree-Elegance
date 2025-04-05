// // @ts-nocheck


// import React from "react";
// import { getAllSarees, getSareesByType, getSareesByOccasion, getSareesByColor, SareeType, SareeOccasion, SareeColor } from "@/lib/data";
// import { Button } from "@/components/ui/button";
// import ProductCard from "@/components/product/product-card";
// import ProductFilter from "@/components/product/product-filter";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// interface ProductsPageProps {
//   searchParams: {
//     type?: SareeType;
//     occasion?: SareeOccasion;
//     color?: SareeColor;
//   };
// }

// // export default function ProductsPage({ searchParams }: ProductsPageProps) {
// //   const { type, occasion, color } = searchParams;

// export default function ProductsPage(props: any) {
//   const { searchParams } = props;
  
//   let sarees = getAllSarees();
//   let filterDescription = "";
  
//   // Apply filters
//   if (type) {
//     sarees = getSareesByType(type);
//     filterDescription = `${type.charAt(0).toUpperCase() + type.slice(1)} Sarees`;
//   } else if (occasion) {
//     sarees = getSareesByOccasion(occasion);
//     filterDescription = `${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Sarees`;
//   } else if (color) {
//     sarees = getSareesByColor(color);
//     filterDescription = `${color.charAt(0).toUpperCase() + color.slice(1)} Sarees`;
//   }

//   return (
//     <div className="container py-8">
//       <Breadcrumb className="mb-6">
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             <BreadcrumbLink href="/">Home</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>Products</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>

//       <div className="flex flex-col md:flex-row justify-between items-start mb-6">
//         <div>
//           <h1 className="text-3xl font-playfair font-medium text-saree-dark">
//             {filterDescription || "All Sarees"}
//           </h1>
//           <p className="text-saree-secondary mt-2">
//             {sarees.length} {sarees.length === 1 ? "product" : "products"} available
//           </p>
//         </div>
//       </div>

//       <ProductFilter />

//       {sarees.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {sarees.map((saree) => (
//             <ProductCard key={saree.id} saree={saree} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16">
//           <h3 className="text-lg font-medium text-gray-900 mb-2">
//             No products found
//           </h3>
//           <p className="text-gray-500 mb-6">
//             We couldn't find any products matching your current filters.
//           </p>
//           <Button asChild variant="outline">
//             <a href="/products">Clear all filters</a>
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }




// @ts-nocheck

import React from "react";
import { getAllSarees, getSareesByType, getSareesByOccasion, getSareesByColor, SareeType, SareeOccasion, SareeColor } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/product-card";
import ProductFilter from "@/components/product/product-filter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductsPageProps {
  searchParams: {
    type?: SareeType;
    occasion?: SareeOccasion;
    color?: SareeColor;
  };
}

// export default function ProductsPage({ searchParams = {} }: ProductsPageProps) {
//   const { type, occasion, color } = searchParams;

export default function ProductsPage({ searchParams }: any) {
  const { type, occasion, color } = searchParams || {};
  
  let sarees = getAllSarees();
  let filterDescription = "";
  
  // Apply filters
  if (type) {
    sarees = getSareesByType(type);
    filterDescription = `${type.charAt(0).toUpperCase() + type.slice(1)} Sarees`;
  } else if (occasion) {
    sarees = getSareesByOccasion(occasion);
    filterDescription = `${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Sarees`;
  } else if (color) {
    sarees = getSareesByColor(color);
    filterDescription = `${color.charAt(0).toUpperCase() + color.slice(1)} Sarees`;
  }

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-playfair font-medium text-saree-dark">
            {filterDescription || "All Sarees"}
          </h1>
          <p className="text-saree-secondary mt-2">
            {sarees.length} {sarees.length === 1 ? "product" : "products"} available
          </p>
        </div>
      </div>

      <ProductFilter />

      {sarees.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sarees.map((saree) => (
            <ProductCard key={saree.id} saree={saree} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-500 mb-6">
            We couldn't find any products matching your current filters.
          </p>
          <Button asChild variant="outline">
            <a href="/products">Clear all filters</a>
          </Button>
        </div>
      )}
    </div>
  );
}

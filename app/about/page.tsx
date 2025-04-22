// import React from "react";
// import Image from "next/image";
// import { Separator } from "@/components/ui/separator";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// export default function AboutPage() {
//   return (
//     <div className="container py-8">
//       <Breadcrumb className="mb-6">
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             <BreadcrumbLink href="/">Home</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>About Us</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>

//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-playfair font-medium text-saree-dark text-center mb-8">Our Story</h1>
        
//         <div className="aspect-square w-48 md:w-64 relative rounded-full overflow-hidden bg-saree-light p-4 mb-8 mx-auto">
//           <div className="h-full w-full rounded-full bg-saree-accent/30 flex items-center justify-center">
//             <div className="text-center">
//               <p className="text-saree-dark font-playfair text-lg">Est.</p>
//               <p className="text-saree-primary font-playfair font-bold text-2xl">2025</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="prose prose-lg max-w-none">
//           <p>
//             Welcome to <span className="text-saree-primary font-medium">Mrunal Collections</span>, your one-stop destination for stylish, high-quality summer sarees that bring elegance, comfort, and affordability together in one beautiful drape. As the heat rises and the sun shines brighter, it's time to refresh your wardrobe with sarees that not only look graceful but feel light and breathable—perfect for the summer season.
//           </p>
          
//           <p>
//           We understand that a saree is not just a piece of clothing—it's a symbol of tradition, beauty, and confidence. At Mrunali Collections, we bring you a thoughtfully curated collection of summer sarees crafted from premium fabrics, designed to keep you cool and fashionable all season long.
//           </p>
          
//           <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Our Mission</h2>
//           <p>
//             We are committed to preserving and promoting the art of traditional saree weaving while ensuring that the artisans behind these beautiful creations receive fair compensation for their craft. Each saree in our collection tells a story – of heritage, of craftsmanship, and of the hands that brought it to life.
//           </p>
          
//           <Separator className="my-8" />
          
//           <div className="grid md:grid-cols-2 gap-8 my-8">
//             <div>
//               <h3 className="text-xl font-medium text-saree-dark mb-4">The Craft</h3>
//               <p>
//                 We work directly with weavers from various regions of India, including Banaras, Kanchipuram, and Bengal. By eliminating middlemen, we ensure better livelihoods for artisans while offering authentic, high-quality sarees to our customers at reasonable prices.
//               </p>
//             </div>
            
//             <div>
//               <h3 className="text-xl font-medium text-saree-dark mb-4">Our Values</h3>
//               <ul className="list-disc pl-5 space-y-2">
//                 <li>Authenticity in every thread</li>
//                 <li>Fair trade practices with all our artisans</li>
//                 <li>Preservation of traditional weaving techniques</li>
//                 <li>Exceptional customer service</li>
//                 <li>Sustainable and ethical fashion</li>
//               </ul>
//             </div>
//           </div>
          
//           <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Our Collection</h2>
//           <p>
//             Our carefully curated collection includes a wide range of sarees – from everyday cotton and linen pieces to exquisite silk and designer sarees for special occasions. Each piece is handpicked for its quality, craftsmanship, and uniqueness.
//           </p>
          
//           <p>
//             We take pride in offering both traditional designs that honor centuries-old weaving traditions and contemporary styles that appeal to the modern woman. Whether you're looking for your first saree or adding to your collection, we have something special for everyone.
//           </p>
          
//           <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Connect With Us</h2>
//           <p>
//             We believe in building personal connections with our customers. That's why we've made it easy to reach us directly through WhatsApp, where we can provide personalized assistance, answer your questions, and help you find the perfect saree for any occasion.
//           </p>
          
//           <p className="mt-8 text-center font-playfair text-lg text-saree-secondary">
//             Thank you for being part of our journey as we continue to celebrate the timeless elegance of sarees.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






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
        <h1 className="text-3xl font-playfair font-medium text-saree-dark text-center mb-8">
          Discover Mrunali Collections: Where Summer Meets Style in Sarees
        </h1>
        
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
            Welcome to <span className="text-saree-primary font-medium">Mrunali Collections</span>, your one-stop destination for stylish, high-quality summer sarees that bring elegance, comfort, and affordability together in one beautiful drape. As the heat rises and the sun shines brighter, it's time to refresh your wardrobe with sarees that not only look graceful but feel light and breathable—perfect for the summer season.
          </p>
          
          <p>
            We understand that a saree is not just a piece of clothing—it's a symbol of tradition, beauty, and confidence. At Mrunali Collections, we bring you a thoughtfully curated collection of summer sarees crafted from premium fabrics, designed to keep you cool and fashionable all season long.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Why Choose Our Summer Sarees?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Breathable, Premium Fabrics:</strong> Our sarees are made from high-quality, breathable fabrics like cotton, linen, mulmul, chiffon, georgette, and modal silk, ensuring you stay fresh and sweat-free even on the hottest days.
            </li>
            <li>
              <strong>Style That Speaks for Itself:</strong> From elegant florals to modern minimalistic prints, our summer saree collection is crafted to make a statement for every occasion.
            </li>
            <li>
              <strong>Affordable Luxury:</strong> High fashion shouldn’t cost a fortune. Our sarees start at just ₹999, offering timeless elegance without breaking the bank.
            </li>
          </ul>

          <Separator className="my-8" />

          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Our Signature Summer Saree Range</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Cotton Charm Collection:</strong> Hand-block prints, soothing pastels, and quirky contemporary designs perfect for everyday wear.
            </li>
            <li>
              <strong>Linen Luxe Series:</strong> Lightweight elegance with zari borders, subtle embroidery, or plain sophistication.
            </li>
            <li>
              <strong>Floral Bliss Edit:</strong> Breezy chiffon and georgette sarees with vibrant floral patterns.
            </li>
            <li>
              <strong>Festive Summer Specials:</strong> Celebrate in style with lightweight modal silk and banarasi blends.
            </li>
            <li>
              <strong>Printed Magic:</strong> Digital prints, kalamkari patterns, and bold motifs for the fashion-forward.
            </li>
          </ul>

          <Separator className="my-8" />

          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">What Sets Mrunali Collections Apart?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Curated with Care: Every saree aligns with the season’s vibe.</li>
            <li>Customer-First Pricing: Luxury meets affordability.</li>
            <li>Perfect for Every Woman: Styles for all ages and preferences.</li>
            <li>Easy Online Shopping: Intuitive navigation and dedicated support.</li>
            <li>Fast, Reliable Shipping across India.</li>
          </ul>

          <Separator className="my-8" />

          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Customer Testimonials</h2>
          <p>“The cotton saree I ordered is incredibly soft and stylish. Perfect for my daily office wear!” – Aarti S.</p>
          <p>“Loved the linen saree I wore to my cousin’s haldi. Got so many compliments, and it felt light even in the heat.” – Meenakshi D.</p>
          <p>“Affordable and beautiful! The prints are so fresh and summery. I’ll definitely be shopping again.” – Rupa M.</p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-playfair font-medium text-saree-dark mt-8 mb-4">Stay Cool, Look Stunning This Summer</h2>
          <p>
            Don’t let the heat dull your shine. Browse our latest arrivals and drape yourself in elegance—only at Mrunali Collections.
          </p>

          <p className="mt-8 text-center font-playfair text-lg text-saree-secondary">
            Ready to fall in love with summer sarees? Explore our collection today!
          </p>
        </div>
      </div>
    </div>
  );
}

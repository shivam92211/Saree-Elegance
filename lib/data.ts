export type SareeType = 'silk' | 'cotton' | 'linen' | 'banarasi' | 'chiffon' | 'georgette';
export type SareeOccasion = 'casual' | 'wedding' | 'festive' | 'party' | 'office';
export type SareeColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'black' | 'white' | 'gold' | 'silver' | 'multicolor';

export interface SareeImage {
  id: string;
  src: string;
  alt: string;
}

export interface Saree {
  id: string;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  images: SareeImage[];
  type: SareeType;
  occasion: SareeOccasion[];
  color: SareeColor[];
  description: string;
  material: string;
  blousePiece: boolean;
  blouseDetails?: string;
  careInstructions: string[];
  length: string;
  featured: boolean;
  new: boolean;
  inStock: boolean;
}

export const sarees: Saree[] = [
  {
    id: "saree1",
    name: "Banarasi Silk Wedding Saree",
    slug: "banarasi-silk-wedding-saree",
    price: 15999,
    discountPrice: 13999,
    images: [
      {
        id: "saree1_1",
        src: "/saree-images/saree1_1.svg",
        alt: "Banarasi Silk Wedding Saree - Front View"
      },
      {
        id: "saree1_2",
        src: "/saree-images/saree1_2.svg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      }
    ],
    type: "banarasi",
    occasion: ["wedding", "festive"],
    color: ["red", "gold"],
    description: "Exquisite hand-woven Banarasi silk saree with intricate gold zari work throughout. This luxurious piece features traditional motifs and a rich pallu that will make you stand out at any wedding or special occasion. The vibrant red color symbolizes auspiciousness and celebration, making it perfect for brides and wedding guests alike.",
    material: "Pure silk with gold zari work",
    blousePiece: true,
    blouseDetails: "Includes unstitched blouse piece with matching zari work",
    careInstructions: [
      "Dry clean only",
      "Store in muslin cloth",
      "Keep away from direct sunlight",
      "Handle zari work with care"
    ],
    length: "5.5 meters",
    featured: true,
    new: false,
    inStock: true
  },
  {
    id: "saree2",
    name: "Lightweight Cotton Casual Saree",
    slug: "lightweight-cotton-casual-saree",
    price: 2999,
    discountPrice: 2499,
    images: [
      {
        id: "saree2_1",
        src: "/saree-images/saree2_1.svg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_2",
        src: "/saree-images/saree2_2.svg",
        alt: "Lightweight Cotton Casual Saree - Detail View"
      }
    ],
    type: "cotton",
    occasion: ["casual", "office"],
    color: ["blue", "white"],
    description: "Stay cool and comfortable with this breathable handloom cotton saree. Perfect for everyday wear, this lightweight piece features a contemporary striped pattern in soothing blue tones with a contrast border. The minimalist design makes it suitable for office wear while the premium cotton quality ensures comfort throughout the day.",
    material: "Handloom cotton",
    blousePiece: true,
    blouseDetails: "Includes unstitched blouse piece in matching blue shade",
    careInstructions: [
      "Machine wash in cold water",
      "Use mild detergent",
      "Hang dry in shade",
      "Iron when slightly damp for best results"
    ],
    length: "6.3 meters",
    featured: false,
    new: true,
    inStock: true
  },
  {
    id: "saree3",
    name: "Designer Georgette Party Saree",
    slug: "designer-georgette-party-saree",
    price: 7999,
    discountPrice: 6999,
    images: [
      {
        id: "saree3_1",
        src: "/saree-images/saree3_1.svg",
        alt: "Designer Georgette Party Saree - Front View"
      },
      {
        id: "saree3_2",
        src: "/saree-images/saree3_2.svg",
        alt: "Designer Georgette Party Saree - Detail View"
      }
    ],
    type: "georgette",
    occasion: ["party", "festive"],
    color: ["purple", "silver"],
    description: "Make a statement at your next party with this stunning designer georgette saree. The lightweight fabric drapes beautifully while the lavish sequin and bead embellishments catch the light with every movement. The rich purple base with silver accents creates a regal look perfect for evening events and special celebrations.",
    material: "Premium georgette with sequin and bead work",
    blousePiece: true,
    blouseDetails: "Includes readymade blouse with intricate embroidery and back hook closure",
    careInstructions: [
      "Dry clean only",
      "Store flat or rolled to preserve embellishments",
      "Keep away from jewelry to prevent snagging",
      "Handle delicate work with care"
    ],
    length: "5.5 meters",
    featured: true,
    new: false,
    inStock: true
  },
  {
    id: "saree4",
    name: "Traditional Linen Festival Saree",
    slug: "traditional-linen-festival-saree",
    price: 4999,
    discountPrice: 4499,
    images: [
      {
        id: "saree4_1",
        src: "/saree-images/saree4_1.svg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree4_2",
        src: "/saree-images/saree4_2.svg",
        alt: "Traditional Linen Festival Saree - Detail View"
      }
    ],
    type: "linen",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: "Celebrate traditions with this eco-friendly pure linen saree featuring hand-block prints in vibrant colors. The natural texture of linen combined with traditional motifs creates a perfect blend of comfort and style. The contrasting border and pallu add visual interest to this lightweight, breathable festival wear.",
    material: "100% pure linen with natural dyes",
    blousePiece: true,
    blouseDetails: "Includes unstitched blouse piece with matching block prints",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.3 meters",
    featured: true,
    new: true,
    inStock: true
  }
];

export const getAllSarees = () => sarees;

export const getFeaturedSarees = () => sarees.filter(saree => saree.featured);

export const getNewArrivals = () => sarees.filter(saree => saree.new);

export const getSareeBySlug = (slug: string) => sarees.find(saree => saree.slug === slug);

export const getSareeById = (id: string) => sarees.find(saree => saree.id === id);

export const getSareesByType = (type: SareeType) => sarees.filter(saree => saree.type === type);

export const getSareesByOccasion = (occasion: SareeOccasion) => {
  return sarees.filter(saree => saree.occasion.includes(occasion));
};

export const getSareesByColor = (color: SareeColor) => {
  return sarees.filter(saree => saree.color.includes(color));
};

export const getTypes = (): { value: SareeType; label: string }[] => [
  { value: 'silk', label: 'Silk' },
  { value: 'cotton', label: 'Cotton' },
  { value: 'linen', label: 'Linen' },
  { value: 'banarasi', label: 'Banarasi' },
  { value: 'chiffon', label: 'Chiffon' },
  { value: 'georgette', label: 'Georgette' },
];

export const getOccasions = (): { value: SareeOccasion; label: string }[] => [
  { value: 'casual', label: 'Casual' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'festive', label: 'Festive' },
  { value: 'party', label: 'Party' },
  { value: 'office', label: 'Office' },
];

export const getColors = (): { value: SareeColor; label: string }[] => [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
  { value: 'orange', label: 'Orange' },
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
  { value: 'multicolor', label: 'Multicolor' },
];

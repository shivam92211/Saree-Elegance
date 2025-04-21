export type SareeType = 'silk' | 'cotton' | 'linen' | 'banarasi' | 'chiffon' | 'georgette' ;
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
    name: " Khadi Cotton Saree",
    slug: "khadi-cotton-saree",
    price: 3999,
    discountPrice: 1150,
    images: [
      {
        id: "saree1_1",
        src: "/saree1/saree1_1.jpg",
        alt: "Banarasi Silk Wedding Saree - Front View"
      },
      {
        id: "saree1_2",
        src: "/saree1/saree1_2.jpg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      },
      {
        id: "saree1_3",
        src: "/saree1/saree1_3.jpg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      },
      {
        id: "saree1_4",
        src: "/saree1/saree1_4.jpg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      },
      {
        id: "saree1_5",
        src: "/saree1/saree1_5.jpg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      },
      {
        id: "saree1_5",
        src: "/saree1/saree1_6.jpg",
        alt: "Banarasi Silk Wedding Saree - Detail View"
      }
    ],
    type: "cotton",
    occasion: ["wedding", "festive"],
    color: ['red' , 'blue' , 'green' ,'purple' ,'pink' ],
    description: `Best Quality Khadi Cotton Saree With Extra Blouse🥻
        🍁Size:- 6.5m+ 1m
        🌸 Note :- 1m extra Block Print Pure Cotton Blouse`,
    material: " Khadi Cotton ",
    blousePiece: true,
    blouseDetails: "Includes unstitched blouse piece with matching zari work",
    careInstructions: [
      "Dry clean only",
      "Store in muslin cloth",
      "Keep away from direct sunlight",
      "Handle zari work with care"
    ],
    length: "6.5m + 1m",
    featured: true,
    new: false,
    inStock: true
  },

  {
    id: "saree2",
    name: "NARAYANPETH SAREES🌸",
    slug: "narayanpeth-sarees",
    price: 5999,
    discountPrice: 1550,
    images: [
      {
        id: "saree2_1",
        src: "/saree2/saree2_1.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_2",
        src: "/saree2/saree2_2.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_3",
        src: "/saree2/saree2_3.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_4",
        src: "/saree2/saree2_4.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_5",
        src: "/saree2/saree2_5.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      },
      {
        id: "saree2_6",
        src: "/saree2/saree2_6.jpg",
        alt: "Lightweight Cotton Casual Saree - Front View"
      }
      
    ],
    type: "cotton",
    occasion: ["wedding", "festive"],
    color: ['red' , 'blue' , 'green' ,'purple' ,'pink' ],
    description: `Special Narayanpeth border sarees with beautiful Colors ✨ Saree with 3mtrs flower butta work ❤️ 
    Fabric - cotton by acrylic 🌸 
    6 mts saree with running blouse and gonda 💙
    Colors also available🍥 
    Pallu - contrast Meena rich pallu💚`,
    material: "Fabric - cotton by acrylic ",
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
    name: "😍PURE SILK COPY😍",
    slug: "pure-silk-copy",
    price: 4999,
    discountPrice: 1750,
    images: [
      {
        id: "saree3_1",
        src: "/saree3/saree3_1.jpg",
        alt: "Designer Georgette Party Saree - Front View"
      },
      {
        id: "saree3_2",
        src: "/saree3/saree3_2.jpg",
        alt: "Designer Georgette Party Saree - Front View"
      },
      {
        id: "saree3_3",
        src: "/saree3/saree3_3.jpg",
        alt: "Designer Georgette Party Saree - Front View"
      },
      {
        id: "saree3_4",
        src: "/saree3/saree3_4.jpg",
        alt: "Designer Georgette Party Saree - Front View"
      },
      {
        id: "saree3_6",
        src: "/saree3/saree3_5.jpg",
        alt: "Designer Georgette Party Saree - Front View"
      }
    ],
    type: "silk",
    occasion: ["party", "festive"],
    color: ["purple", "silver"],
    description: `Handloom Garbha-reshmi Ercal Paithani
          ✨✨✨✨✨✨✨✨
          Handmade Border With Taseels
          Garbhareshmi Tope Pallu
          Running Blouse Peice
          Premium Muserise Shiny & Soft Silk
          Full Stock Available
          Premium Quality 💯`,
    material: "Georgette with intricate embroidery",
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
    name: "Takshshila Paithani",
    slug: "takshshila-paithani",
    price: 4499,
    discountPrice: 1550,
    images: [
      {
        id: "saree4_1",
        src: "/saree4/saree4_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },  
      {
        id: "saree4_2",
        src: "/saree4/saree4_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree4_3",
        src: "/saree4/saree4_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree4_4",
        src: "/saree4/saree4_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree4_5",
        src: "/saree4/saree4_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree4_6",
        src: "/saree4/saree4_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree4_7",
        src: "/saree4/saree4_7.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      }
      // {
      //   id: "saree4_8",
      //   src: "/saree4/saree4_8.jpg",
      //   alt: "Traditional Linen Festival Saree - Detail View"
      // },
      // {
      //   id: "saree4_9",
      //   src: "/saree4/saree4_9.jpg",
      //   alt: "Traditional Linen Festival Saree - Front View"
      // },
      // {
      //   id: "saree4_10",
      //   src: "/saree4/saree4_10.jpg",
      //   alt: "Traditional Linen Festival Saree - Detail View"
      // },
      // {
      //   id: "saree4_11",
      //   src: "/saree4/saree4_11.jpg",
      //   alt: "Traditional Linen Festival Saree - Front View"
      // },
      // {
      //   id: "saree4_12",
      //   src: "/saree4/saree4_12.jpg",
      //   alt: "Traditional Linen Festival Saree - Detail View"
      // },
      // {
      //   id: "saree4_13",
      //   src: "/saree4/saree4_13.jpg",
      //   alt: "Traditional Linen Festival Saree - Front View"
      // },
      // {
      //   id: "saree4_14",
      //   src: "/saree4/saree4_14.jpg",
      //   alt: "Traditional Linen Festival Saree - Detail View"
      // },
    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `All over Butti
        Floral Brocade Border
        50 % pure Silk
        Self Blouse piece
        Full Stock Available💯`,
    material: "50% pure Silk",
    blousePiece: true,
    blouseDetails: "Floral Brocade Border",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5 meters",
    featured: true,
    new: true,
    inStock: true
  },

  {
    id: "saree5",
    name: "Trisha Kalanjali",
    slug: "trisha-kalanjali",
    price: 4499,
    discountPrice: 2850,
    images: [
      {
        id: "saree5_1",
        src: "/saree5/saree5_1.jpeg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree5/saree5_2.jpeg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree5_1",
        src: "/saree5/saree5_3.jpeg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree5/saree5_4.jpeg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree5_1",
        src: "/saree5/saree5_5.jpeg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree5/saree5_6.jpeg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `All over Buttis
          Paithani Border
          Tana Soft Silk
          Contrast Blouse
          Rich Pallu
          Premium Quality 💯`,
    material: "Tana Soft Silk",
    blousePiece: true,
    blouseDetails: "Blouse Work Paithani",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.1 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree6",
    name: "Aisha Traditional Pallu Paithani",
    slug: "aisha-traditional-pallu-paithani",
    price: 4499,
    discountPrice: 1750,
    images: [
      {
        id: "saree5_1",
        src: "/saree6/saree6_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree6/saree6_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree5_1",
        src: "/saree6/saree6_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree6/saree6_9.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree5_1",
        src: "/saree6/saree6_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree5_2",
        src: "/saree6/saree6_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `All over Buttis
          Paithani Border
          Tana Soft Silk
          Contrast Blouse
          Rich Pallu
          Premium Quality 💯`,
    material: "Soft Tana Silk ",
    blousePiece: true,
    blouseDetails: "Blouse Work Paithani",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.1 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree7",
    name: "🦚New Maharani Kadiyal Paithani🦚",
    slug: "new-maharani-kadiyal-paithani",
    price: 4499,
    discountPrice: 1550,
    images: [
      {
        id: "saree7_1",
        src: "/saree7/saree7_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree7_2",
        src: "/saree7/saree7_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree7_3",
        src: "/saree7/saree7_8.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree7_4",
        src: "/saree7/saree7_11.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree7_5",
        src: "/saree7/saree7_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree7_6",
        src: "/saree7/saree7_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `Pure Silk Copy Maharani Kadiyal
          Soft Silk Shinny Material
          All Over Kalanjali Butti
          Meenakari Weaving Pallu
          Book Fast 🙌🏻
          ✨✨✨✨`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Contrst Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.1 meters",
    featured: true,
    new: true,
    inStock: true
  },






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

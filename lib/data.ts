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

  {
    id: "saree8",
    name: "Georgette Saree",
    slug: "georgette-saree",
    price: 4499,
    discountPrice: 1650,
    images: [
      {
        id: "saree8_1",
        src: "/saree8/saree8_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree8_2",
        src: "/saree8/saree8_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree8_3",
        src: "/saree8/saree8_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree8_4",
        src: "/saree8/saree8_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree8_5",
        src: "/saree8/saree8_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      }

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `Soft crush georgette saree with leaf design emboridary c-pallu with patched lace border

    Blouse- perfectly matched batik style digital printed crape silk.
    `,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "1 meter Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree9",
    name: "Banarasi pattu saree",
    slug: "banarasi-pattu-saree",
    price: 4499,
    discountPrice: 2900,
    images: [
      {
        id: "saree9_1",
        src: "/saree9/saree9_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree9_2",
        src: "/saree9/saree9_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree9_3",
        src: "/saree9/saree9_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree9_4",
        src: "/saree9/saree9_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    Banarasi pattu saree with paithani weaving on all over the saree
      Rich & elegant paithani pallu as shown
      Paithani Muniya Border on either side
      Scalloped Lace attached on saree
      Measurement  & Pattern as per customer Need`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Teamed with designer stitched blouse piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree10",
    name: "Soft organza",
    slug: "soft-organza",
    price: 4499,
    discountPrice: 2100,
    images: [
      {
        id: "saree10_1",
        src: "/saree10/saree10_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree10_2",
        src: "/saree10/saree10_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree10_3",
        src: "/saree10/saree10_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree10_4",
        src: "/saree10/saree10_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    Soft organza saree with beautiful print cover with handcrafted work all over and stitched silk blouse with handwork `,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "silk blouse with handwork",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree11",
    name: "❣️❣️ KORVAI BORDER SILK COTTON",
    slug: "korvai-border-silk-cotton",
    price: 4499,
    discountPrice: 1650,
    images: [
      {
        id: "saree11_1",
        src: "/saree11/saree11_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree11_2",
        src: "/saree11/saree11_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree11_3",
        src: "/saree11/saree11_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree11_4",
        src: "/saree11/saree11_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree11_5",
        src: "/saree11/saree11_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree11_6",
        src: "/saree11/saree11_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    💞 Saree - 6:25 mts with Attached  blouse 
    💞 Kottanji korvai border 
    💞 Contrast plain blouse 
    💞 Contrast chit and line  pallu
    ❣️ All colors multiples Available
    🖤💞🖤💞🖤💞🖤💞🖤💞🖤`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "💞 Contrast plain blouse",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.25 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree12",
    name: "Maithali ❤️",
    slug: "maithali",
    price: 4499,
    discountPrice: 1750,
    images: [
      {
        id: "saree12_1",
        src: "/saree12/saree12_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree12_2",
        src: "/saree12/saree12_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree12_3",
        src: "/saree12/saree12_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree12_4",
        src: "/saree12/saree12_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree12_5",
        src: "/saree12/saree12_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree12_6",
        src: "/saree12/saree12_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    Pure soft Rangoli silk sarees with beautiful embroidery thread work  lehariya in all over saree with heavy borders nd cut work...
    Paired with Fully Stiched embroidery work blouse on running fabrics 
    Can be upto 42"
    🔥Eye catching 6 colours 🔥`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Blouse on running fabrics ",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.25 meters",
    featured: true,
    new: true,
    inStock: true
  },

  {
    id: "saree13",
    name: "👆Kora Organza Silk Collection ☝",
    slug: "kora-organaza-silk-collection",
    price: 4499,
    discountPrice: 1650,
    images: [
      {
        id: "saree13_1",
        src: "/saree13/saree13_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree13_2",
        src: "/saree13/saree13_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree13_3",
        src: "/saree13/saree13_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree13_4",
        src: "/saree13/saree13_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree13_5",
        src: "/saree13/saree13_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree13_6",
        src: "/saree13/saree13_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    👆Trending  kora organza silk collection ☝ 
      Bnarasi soft kora organza  silk fabric 
      Latest Trending zari weaving  border design  😍 
      Beautiful chikankari  embroidery work design full saree
      Best quality 💯 and dimanded design 
      Plain with bodar blouse pic 
      Zari weaving  disignr pllu
      Gud fabric saree 
      Singl n multiple avlibl 😍`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Plain with bodar blouse pic",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree14",
    name: "Pure silk sarees",
    slug: "pure-silk-sarees",
    price: 4499,
    discountPrice: 1850,
    images: [
      {
        id: "saree14_1",
        src: "/saree14/saree14_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree14_2",
        src: "/saree14/saree14_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree14_3",
        src: "/saree14/saree14_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree14_4",
        src: "/saree14/saree14_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree14_5",
        src: "/saree14/saree14_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree14_6",
        src: "/saree14/saree14_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    FABRIC:-PURE SOFT GOLD ZARI KANCHIVRAM  PAITHANI SILK
    AND CONTRAST MINAKARI BODER AND HEAVY MINA ZARI WEAVING  PALLU
    💯%Best Quality 
    💯%Full Guarantee
    This saree's not replica
    Not champion`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Blouse - contrast brocket",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },

  {
    id: "saree15",
    name: "Traditional Narayanpeth Silk Paithani",
    slug: "traditional-narayanpeth-silk-paithani",
    price: 4499,
    discountPrice: 1850,
    images: [
      {
        id: "saree15_1",
        src: "/saree15/saree15_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree15_2",
        src: "/saree15/saree15_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree15_3",
        src: "/saree15/saree15_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree15_4",
        src: "/saree15/saree15_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree15_5",
        src: "/saree15/saree15_7.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree15_6",
        src: "/saree15/saree15_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    ✨✨✨✨✨✨✨✨
    Shoulder Buttis
    Traditional Rich Pallu
    Running Blouse Piece
    Premium Pure Shiny Soft Silk
    Full Stock Available
    ✨✨✨✨✨✨✨✨`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Running Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "5.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree16",
    name: "Cotton Saree collection",
    slug: "cotton-saree-collection",
    price: 4499,
    discountPrice: 1150,
    images: [
      {
        id: "saree16_1",
        src: "/saree16/saree16_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree16_2",
        src: "/saree16/saree16_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree16_3",
        src: "/saree16/saree16_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree16_4",
        src: "/saree16/saree16_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree16_5",
        src: "/saree16/saree16_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree16_6",
        src: "/saree16/saree16_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "cotton",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    🍁New arrival🍁
    🍀Cotton Saree collection🍀
    Hand block printed pure cotton mulmul saree
    👉🏻Print- Hand block Bagru, Dabu, Batik  Vegetable dye
    👉🏻Size:- 6.5 with blouse
    👉🏻Fabric:-Pure cotton 92*80 super dying
    👉🏻 All Design available in quantity 👈🏻`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Running Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree17",
    name: "Chinnon Silk sarees",
    slug: "chinnon-silk-sarees",
    price: 4499,
    discountPrice: 1450,
    images: [
      {
        id: "saree17_1",
        src: "/saree17/saree17_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree17_2",
        src: "/saree17/saree17_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree17_3",
        src: "/saree17/saree17_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree17_4",
        src: "/saree17/saree17_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree17_5",
        src: "/saree17/saree17_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree17_6",
        src: "/saree17/saree17_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "silk",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    Pure Chinnon Silk sarees with Sequence Embroidery Work In Saree With Heavy Fancy Embroidery Work Blouse`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Running Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.5 meters",
    featured: true,
    new: true,
    inStock: true
  },


  {
    id: "saree18",
    name: "🦚Shree Renuka Mata Prasanna🦚",
    slug: "shree-renuka-mata-prasanna",
    price: 4499,
    discountPrice: 3700,
    images: [
      {
        id: "saree18_1",
        src: "/saree18/saree18_1.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree18_2",
        src: "/saree18/saree18_2.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree18_3",
        src: "/saree18/saree18_3.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree18_4",
        src: "/saree18/saree18_4.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },
      {
        id: "saree18_5",
        src: "/saree18/saree18_5.jpg",
        alt: "Traditional Linen Festival Saree - Front View"
      },
      {
        id: "saree18_6",
        src: "/saree18/saree18_6.jpg",
        alt: "Traditional Linen Festival Saree - Detail View"
      },

    ],
    type: "cotton",
    occasion: ["festive", "casual"],
    color: ["green", "yellow", "multicolor"],
    description: `
    🦚 2-3-2  kadiyal  paithani. 🦚
    🦚Sami  Silk  Material🦚
    🦚AllOver Meena Butta 🦚
    🦚 contras Blouse.🦚
    🦚Contras Border🦚`,
    material: "Soft & Shinny Material",
    blousePiece: true,
    blouseDetails: "Running Blouse Piece",
    careInstructions: [
      "Gentle machine wash or hand wash",
      "Use mild detergent",
      "Avoid bleach",
      "Iron when slightly damp on medium heat"
    ],
    length: "6.5 meters",
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

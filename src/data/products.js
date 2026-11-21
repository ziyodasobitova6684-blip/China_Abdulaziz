export const initialProducts = [
  {
    id: 1,
    name: {
      uz: "Premium erkaklar kurtkasi",
      ru: "Премиальная мужская куртка",
      en: "Premium Men's Jacket",
    },
    description: {
      uz: "Zamonaviy dizayn, sifatli material va qulay kiyim.",
      ru: "Современный дизайн, качественный материал и комфорт.",
      en: "Modern design, quality material and comfort.",
    },
    price: 120,
    category: "men-clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Qora", "Kulrang"],
    stock: 15,
  },
  {
    id: 2,
    name: {
      uz: "Erkaklar klassik ko‘ylagi",
      ru: "Классическая мужская рубашка",
      en: "Classic Men's Shirt",
    },
    description: {
      uz: "Kundalik va rasmiy kiyinish uchun.",
      ru: "Для повседневного и официального стиля.",
      en: "For casual and formal style.",
    },
    price: 65,
    category: "men-clothing",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Oq", "Qora"],
    stock: 20,
  },
  {
    id: 3,
    name: {
      uz: "Erkaklar charm sumkasi",
      ru: "Мужская кожаная сумка",
      en: "Men's Leather Bag",
    },
    description: {
      uz: "Kundalik foydalanish uchun zamonaviy sumka.",
      ru: "Стильная сумка для повседневного использования.",
      en: "A stylish everyday bag.",
    },
    price: 95,
    category: "men-bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
    sizes: ["Universal"],
    colors: ["Qora", "Jigarrang"],
    stock: 12,
  },
  {
    id: 4,
    name: {
      uz: "Ayollar sumkasi",
      ru: "Женская сумка",
      en: "Women's Bag",
    },
    description: {
      uz: "Nafis dizayndagi kundalik sumka.",
      ru: "Элегантная повседневная сумка.",
      en: "An elegant everyday bag.",
    },
    price: 110,
    category: "women-bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
    sizes: ["Universal"],
    colors: ["Qora", "Bej"],
    stock: 10,
  },
  {
    id: 5,
    name: {
      uz: "Erkaklar oyoq kiyimi",
      ru: "Мужская обувь",
      en: "Men's Shoes",
    },
    description: {
      uz: "Qulay va zamonaviy oyoq kiyim.",
      ru: "Удобная и современная обувь.",
      en: "Comfortable modern footwear.",
    },
    price: 85,
    category: "men-shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Qora", "Oq"],
    stock: 18,
  },
  {
    id: 6,
    name: {
      uz: "Zamonaviy soat",
      ru: "Современные часы",
      en: "Modern Watch",
    },
    description: {
      uz: "Klassik va zamonaviy uslub uyg‘unligi.",
      ru: "Сочетание классического и современного стиля.",
      en: "A blend of classic and modern style.",
    },
    price: 140,
    category: "watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    sizes: ["Universal"],
    colors: ["Qora", "Oltin"],
    stock: 8,
  },
  {
    id: 7,
    name: {
      uz: "Zamonaviy ko‘zoynak",
      ru: "Современные очки",
      en: "Modern Eyewear",
    },
    description: {
      uz: "Har kungi obraz uchun zamonaviy aksessuar.",
      ru: "Современный аксессуар для повседневного образа.",
      en: "A modern accessory for everyday outfits.",
    },
    price: 45,
    category: "eyewear",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900",
    sizes: ["Universal"],
    colors: ["Qora"],
    stock: 14,
  },
  {
    id: 8,
    name: {
      uz: "Bolalar kiyimi",
      ru: "Детская одежда",
      en: "Children's Clothing",
    },
    description: {
      uz: "Bolalar uchun qulay kundalik kiyim.",
      ru: "Удобная повседневная одежда для детей.",
      en: "Comfortable everyday clothing for children.",
    },
    price: 35,
    category: "kids-clothing",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900",
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    colors: ["Ko‘k", "Kulrang"],
    stock: 16,
  },
];

export const categoryBackgrounds = {
  "men-clothing":
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600",
  "women-clothing":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
  "kids-clothing":
    "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1600",
  "men-bags":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600",
  "women-bags":
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600",
  "men-shoes":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600",
  watches:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
  eyewear:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1600",
};

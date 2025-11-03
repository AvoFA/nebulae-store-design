import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Phones
  {
    id: 'phone-1',
    name: 'iPhone 16 Pro',
    price: 1199,
    image: '/src/assets/iphone-16-pro.jpg',
    category: 'phones',
    description: 'Latest flagship with A18 Pro chip, stunning camera system, and titanium design.',
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    image: '/src/assets/galaxy-s24.jpg',
    category: 'phones',
    description: 'Premium Android flagship with S Pen, incredible display, and AI features.',
  },
  {
    id: 'phone-3',
    name: 'Google Pixel 9 Pro',
    price: 999,
    image: '/src/assets/pixel-9.jpg',
    category: 'phones',
    description: 'Pure Android experience with exceptional AI-powered camera capabilities.',
  },
  {
    id: 'phone-4',
    name: 'OnePlus 12',
    price: 799,
    image: '/src/assets/oneplus-12.jpg',
    category: 'phones',
    description: 'Flagship performance at mid-range price with 120Hz display and fast charging.',
  },

  // Laptops
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16"',
    price: 2499,
    image: '/src/assets/macbook-pro.jpg',
    category: 'laptops',
    description: 'M3 Max chip, stunning Liquid Retina XDR display, up to 22 hours battery life.',
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    price: 1899,
    image: '/src/assets/dell-xps.jpg',
    category: 'laptops',
    description: 'Premium Windows laptop with InfinityEdge display and powerful performance.',
  },
  {
    id: 'laptop-3',
    name: 'ASUS ROG Zephyrus',
    price: 2199,
    image: '/src/assets/asus-rog.jpg',
    category: 'laptops',
    description: 'Gaming powerhouse with RTX 4080, 240Hz display, and sleek design.',
  },
  {
    id: 'laptop-4',
    name: 'Lenovo ThinkPad X1',
    price: 1599,
    image: '/src/assets/thinkpad-x1.jpg',
    category: 'laptops',
    description: 'Business-class laptop with legendary keyboard and military-grade durability.',
  },

  // Tablets
  {
    id: 'tablet-1',
    name: 'iPad Pro 12.9"',
    price: 1099,
    image: '/src/assets/ipad-pro.jpg',
    category: 'tablets',
    description: 'M2 chip, Liquid Retina XDR display, perfect for creative professionals.',
  },
  {
    id: 'tablet-2',
    name: 'Samsung Galaxy Tab S9+',
    price: 899,
    image: '/src/assets/galaxy-tab.jpg',
    category: 'tablets',
    description: 'Premium Android tablet with AMOLED display and S Pen included.',
  },
  {
    id: 'tablet-3',
    name: 'Microsoft Surface Pro 9',
    price: 999,
    image: '/src/assets/surface-pro.jpg',
    category: 'tablets',
    description: '2-in-1 versatility with laptop power and tablet portability.',
  },
  {
    id: 'tablet-4',
    name: 'iPad Air',
    price: 599,
    image: '/src/assets/ipad-air.jpg',
    category: 'tablets',
    description: 'Powerful M1 chip in a lightweight design, perfect for everyday use.',
  },
];

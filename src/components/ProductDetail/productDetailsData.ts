import type { ProductDetail } from './types';
import { allProducts } from '../Shop/productsData';

// 1. SPECIFICATIONS & FEATURES FOR SMALL AND MEDIUM OFFICE PRINTERS (IMAGE 1)
const smallAndMediumOfficeSpecs = [
  { category: 'Product', value: 'HP DeskJet All-in-One Printer' },
  { category: 'Functions', value: 'Print, copy, scan' },
  { category: 'Print Speed', value: 'Black (ISO): Up to 7.5 ppm; Color (ISO): Up to 5.5 ppm' },
  { category: 'Print Resolution', value: 'Black: Up to 1200 x 1200 rendered dpi; Color: Up to 4800 x 1200 optimized dpi' },
  { category: 'Print Technology', value: 'HP Thermal Inkjet' },
  { category: 'Recommended Monthly Page Volume', value: '50 to 100 pages' },
  { category: 'Connectivity', value: '1 Wi-Fi 802.11b/g/n; 1 Hi-Speed USB 2.0' },
  { category: 'Mobile Printing', value: 'HP Smart app; Apple AirPrint; Mopria Print Service; Chrome OS' },
  { category: 'Paper Handling', value: '60-sheet input tray; 25-sheet output tray' },
  { category: 'Media Types', value: 'Plain paper, photo paper, brochure paper, envelopes' },
  { category: 'Media Sizes', value: 'Letter, legal, 4 x 6 in, 5 x 7 in, 8 x 10 in, No. 10 envelopes' },
  { category: 'Dimensions (W x D x H)', value: '16.7 x 11.9 x 6.0 in (425 x 304 x 154 mm)' },
  { category: 'Weight', value: '7.55 lb (3.42 kg)' },
  { category: 'Warranty', value: 'One-year limited hardware warranty; 24-hour, 7 days a week support' },
];

const smallAndMediumOfficeFeatures = [
  {
    title: 'Simple setup with the easiest-to-use print app',
    description: 'Get started fast with step-by-step setup using the intuitive HP Smart mobile app.',
  },
  {
    title: 'Stay connected with our most reliable Wi-Fi',
    description: 'Be always ready to print with self-healing dual-band Wi-Fi that automatically detects and resolves connection issues.',
  },
  {
    title: 'Save up to 50% on ink and never run out',
    description: 'Enjoy smart printing benefits with an HP ink subscription, delivered right to your doorstep before you run out.',
  },
  {
    title: 'Driving innovation with 60% recycled plastic',
    description: 'Constructed sustainably using at least 60% post-consumer recycled plastic components.',
  },
];

// 2. SPECIFICATIONS & FEATURES FOR ENTERPRISE PRINTERS & FEEDERS (IMAGE 2)
const enterprisePrinterSpecs = [
  {
    category: 'Compatibility',
    value:
      'HP LaserJet Enterprise M607n, M607dn, M608n, M608dn, M609dn, M609x; HP LaserJet Managed E60055dn, E60065dn, E60075dn',
  },
  { category: 'Input capacity', value: 'Up to 75 envelopes' },
  { category: 'Media sizes, custom', value: '3.5 x 6.3 to 7 x 10 in' },
  { category: 'Dimensions (W X D X H)', value: '16.7 x 16.3 x 5.8 in' },
  { category: 'Weight', value: '12.8 lb' },
  { category: 'Package dimensions', value: '23.5 x 9.72 x 22.2 in' },
  { category: 'Package weight', value: '13.2 lb' },
  {
    category: 'Warranty',
    value:
      '90 Day HP Dealer Exchange. Warranty and support options vary by product, country and local legal requirements.',
  },
  { category: "What's in the box", value: 'HP Envelope Feeder; Documentation (Hardware Install Guide)' },
];

const enterprisePrinterFeatures = [
  {
    title: 'Eliminate manual feeding of envelopes',
    description:
      'Help improve productivity and reduce printer interaction by eliminating the need to manually load envelopes one by one.',
  },
  {
    title: 'Business mailings made easy',
    description:
      'Simplifying business mailings by printing envelopes quickly and efficiently with this feeder that holds 75 envelopes.',
  },
  {
    title: 'Add up to 150 envelopes for automatic printing',
    description:
      'Add two HP Envelope Feeders and print up to 150 professional-looking envelopes at a time without interruptions.',
  },
];

// 3. SPECIFICATIONS & FEATURES FOR SCANNERS (IMAGE 3)
const scannerSpecs = [
  { category: 'Scan type', value: 'Flatbed, Automatic Document Feeder (ADF)' },
  {
    category: 'Scan resolution, optical',
    value: 'Up to 600 x 600 dpi (color and mono, ADF); Up to 1200 x 1200 dpi (color and mono, flatbed)',
  },
  { category: 'Duty cycle (daily)', value: 'Recommended daily duty cycle: 6,000 pages (ADF)' },
  { category: 'Bit depth', value: '24-bit (external), 48-bit (internal)' },
  { category: 'Auto document feeder capacity', value: 'Standard, 100 sheets' },
  { category: 'Scan speed (ADF)', value: 'Up to 40 ppm / 80 ipm (b&w, gray and color, 300 dpi)' },
  {
    category: 'Connectivity, standard',
    value: 'Ethernet 10/100/1000 Base-TX; Hi-Speed USB 3.0; Wi-Fi 802.11 b/g/n; Wi-Fi Direct',
  },
  { category: 'Dimensions (W x D x H)', value: '19.4 x 12.8 x 5.2 in (491.5 x 325.4 x 133.3 mm)' },
  { category: 'Weight', value: '13.4 lb (6.1 kg)' },
  { category: 'Warranty', value: 'One-year limited hardware warranty; Next business day exchange service' },
];

const scannerFeatures = [
  {
    title: 'High-speed two-sided scanning',
    description: 'Scan up to 40 ppm / 80 ipm with single-pass two-sided scanning to save time and streamline office workflows.',
  },
  {
    title: 'Reliable high-volume daily scanning',
    description: 'Engineered for demanding workspaces with a daily duty cycle of up to 6,000 pages through a robust 100-sheet ADF.',
  },
  {
    title: 'Versatile walk-up touchscreen operation',
    description: 'Quickly preview and initiate routine scanning jobs with one-touch custom workflow presets on the color touchscreen.',
  },
];

// MOCK API FUNCTION - CAN BE REPLACED WITH A BACKEND API CALL IN THE FUTURE
export const getProductDetailById = (productId: string): ProductDetail => {
  // Find product from master list
  const baseProduct = allProducts.find((p) => p.id === productId) || allProducts[0];

  if (baseProduct.category === 'Enterprise Printer') {
    return {
      ...baseProduct,
      sku: '301-15A',
      tag: baseProduct.title,
      freeShipping: true,
      couponAlert: 'Sorry, coupon "cart100" has already been applied and cannot be used in conjunction with other coupons.',
      gallery: [
        baseProduct.image,
        '/products/hp_laserjet_white.jpg',
        '/products/hp_laserjet_compact.jpg',
        '/products/hp_laserjet_feeder.jpg',
      ],
      features: enterprisePrinterFeatures,
      specifications: enterprisePrinterSpecs,
    };
  }

  if (baseProduct.category === 'Scanners') {
    return {
      ...baseProduct,
      sku: 'SCN-882F',
      tag: 'HP ScanJet Professional Scanner',
      freeShipping: true,
      couponAlert: 'Sorry, coupon "cart100" has already been applied and cannot be used in conjunction with other coupons.',
      gallery: [
        baseProduct.image,
        '/products/hp_scanjet.jpg',
        '/products/hp_laserjet_white.jpg',
        '/products/hp_deskjet_cyan.jpg',
      ],
      features: scannerFeatures,
      specifications: scannerSpecs,
    };
  }

  // Default: Small and Medium Office (Image 1)
  return {
    ...baseProduct,
    sku: '301-15A',
    tag: 'HP DeskJet All-in-One Printer',
    freeShipping: true,
    gallery: [
      baseProduct.image,
      '/products/hp_deskjet_cyan.jpg',
      '/products/hp_deskjet_white.jpg',
      '/products/hp_deskjet_black.jpg',
    ],
    features: smallAndMediumOfficeFeatures,
    specifications: smallAndMediumOfficeSpecs,
  };
};

export const getRelatedProducts = (currentProductId: string, count = 3) => {
  const current = allProducts.find((p) => p.id === currentProductId);
  const others = allProducts.filter((p) => p.id !== currentProductId);

  if (current) {
    const sameCategory = others.filter((p) => p.category === current.category);
    if (sameCategory.length >= count) {
      return sameCategory.slice(0, count);
    }
  }

  return others.slice(0, count);
};

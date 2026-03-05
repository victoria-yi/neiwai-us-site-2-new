export interface ProductColor {
  name: string;
  hex: string;
  soldOut?: boolean;
}

export interface ProductVariant {
  id: string;
  label: string;
  sublabel: string;
  images: string[];
  hoverImage?: string;
  colorImages?: Record<string, string[]>;
  colors: ProductColor[];
  description: string;
}

export interface TechnologyFeature {
  number: string;
  headline: string;
  description: string;
  image?: string;
  /** CSS object-position for the feature image (e.g. 'center 25%') */
  imageObjectPosition?: string;
  /** Scale factor for zooming the image (e.g. 1.5 for 150% zoom) */
  imageScale?: number;
  /** Optional background color for the image container (e.g. '#f5f5f5') */
  imageBackgroundColor?: string;
  icon?: 'invisible' | 'molding' | 'stretch' | 'breathe' | 'durability' | 'anchor' | 'comfort';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: 'bras' | 'briefs' | 'leggings';
  line: 'barely-zero' | 'pure-comfort' | 'ultraflex' | 'bandeau' | 'swan' | 'featherlight';
  subcategory: string;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  images: string[];
  hoverImage?: string;
  colorImages?: Record<string, string[]>;
  description: string;
  details: {
    composition: string;
    care: string;
    fit: string;
  };
  sensoryLine: string;
  lifestyleLine: string;
  variants?: ProductVariant[];
  technologyFeatures?: TechnologyFeature[];
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA — 25 Keep List products
// Categories: bras (17) · briefs (5) · leggings (3)
// Lines: barely-zero · pure-comfort · ultraflex · bandeau · swan · featherlight
// Selling points updated from 260302 NEIWAI US_Keep_List_Product.xlsx
// ─────────────────────────────────────────────────────────────

export const brasProducts: Product[] = [
  // ── Barely Zero Line ──────────────────────────────────────
  {
    id: 'bra-001',
    slug: 'barely-zero-anchored-cup-strap-bra',
    name: 'Barely Zero Anchored Cup Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Lilac Ash', hex: '#B8A8B8' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/2025-08-28NEIWAI167441.webp',
      '/images/2025-08-28NEIWAI16787.jpg',
      '/images/2025-08-28NEIWAI16721.jpg',
      '/images/2025-08-28NEIWAI17296.webp',
      '/images/2025-08-28NEIWAI16086.webp',
      '/images/2025-08-28NEIWAI16953.jpg',
    ],
    hoverImage: '/images/2025-08-28NEIWAI167441.webp',
    colorImages: {
      'Eggwhite': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
      'Black': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
      'Treacly Almond': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
      'Lilac Ash': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
      'Peach Pure': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
      'Asparagus Green': [
        '/images/2025-08-28NEIWAI167441.webp',
        '/images/2025-08-28NEIWAI16787.jpg',
        '/images/2025-08-28NEIWAI16721.jpg',
        '/images/2025-08-28NEIWAI17296.webp',
        '/images/2025-08-28NEIWAI16086.webp',
        '/images/2025-08-28NEIWAI16953.jpg',
      ],
    },
    description: 'Thin straps, no underwire, no adjustment required. Adaptive Fit Technology allows the one-size construction to conform to the body rather than the other way around. Anchored cups — secured at the base — stay positioned through movement. The seams are gone. The hardware is gone. The bra remains.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Adaptive Fit Technology conforms to different body shapes without adjustment.',
    },
    sensoryLine: 'One size. Adapts to yours.',
    lifestyleLine: 'The seams are gone. The hardware is gone. The bra remains.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/0129%20%E5%86%85%E5%A4%962216%20adaptive.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Anchored Cups',
        description: 'Secured at the base for consistent, shift-free shaping from morning to night — soft, natural support that holds position through movement.',
        image: '/images/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        imageObjectPosition: 'center 30%',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Fully Seamless Exterior',
        description: 'No underwire, no foam padding, no hardware. Pairs invisibly under any layer for a completely no-show finish.',
        image: '/images/0129%20%E5%86%85%E5%A4%962511_1.jpg',
        imageObjectPosition: 'center 20%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-002',
    slug: 'barely-zero-anchored-cup-signature-bra',
    name: 'Barely Zero Anchored Cup Signature Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Treacly Almond', hex: '#DDD2C7' },
      { name: 'Lilac Ash', hex: '#E2D9DB' },
      { name: 'Icy Purple', hex: '#C8D1DE' },
      { name: 'Eggwhite', hex: '#F7F7F7' },
    ],
    sizes: ['One Size'],
    images: [
      // Black
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17270.webp',
      // Treacly Almond
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32312.jpg',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32371.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI18218.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32620_1.webp',
      // Icy Purple
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32633.jpg',
      // Eggwhite (white bra + black leggings model last)
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16998.webp',
      // Off-white bra + briefs (full body)
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16835.png',
    ],
    hoverImage: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
    colorImages: {
      'Black': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17270.webp',
      ],
      'Treacly Almond': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32312.jpg',
      ],
      'Lilac Ash': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32620_1.webp',
      ],
      'Icy Purple': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI18218.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32633.jpg',
      ],
      'Eggwhite': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32371.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16998.webp',
      ],
    },
    description: 'Wide straps. Anchored cups. No underwire. The Signature Bra is the most supported expression of the Barely Zero construction — designed for busts that need weight distribution without compression. Soft natural shaping with no foam, no structure, nothing pressing.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Wide shoulder straps distribute weight evenly — designed for larger busts.',
    },
    sensoryLine: 'The Barely Zero silhouette, fully resolved.',
    lifestyleLine: 'Shape that holds without shifting. Support without compression.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0129%2002%20%E5%86%85%E5%A4%963093%20adaptive%20fit.jpg',
        imageObjectPosition: 'center 10%',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Anchored Cup Architecture',
        description: 'Cups secured at the base provide shape that holds without shifting or collapsing — natural form from construction, not padding.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        imageObjectPosition: 'center 40%',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Wide Strap Support',
        description: 'Wide shoulder straps distribute weight evenly — designed specifically for larger busts that need support without compression.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/84f83942cab84c0e81429ba237890465%E5%AE%BD%E8%82%A9%E5%B8%A6.jpeg',
        imageObjectPosition: 'center 33%',
        icon: 'anchor',
      },
      {
        number: '04',
        headline: 'Invisible Under Everything',
        description: 'Smooth seamless exterior with no underwire, no foam, and no visible lines under fitted clothing.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/d133b6f3369c4808917d4337b04b828d%20invisiable.jpeg',
        imageObjectPosition: 'center 43%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-003',
    slug: 'barely-zero-strap-bra',
    name: 'Barely Zero Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Fluffy Peach', hex: '#E5E2DD' },
      { name: 'Cinnamon Taste', hex: '#B8956E' },
      { name: 'Black Truffle', hex: '#D4C4B0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16085.jpg?v=1757376293&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
      'https://neiwai.life/cdn/shop/files/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_ALT_8_1.jpg?v=1757376271&width=800',
      '/images/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_Detail_52_1-5d2e691f-93d4-4afe-b113-b6a856c7df37.png',
      '/images/20210111NEIWAI36915-10035604-24e3-4c51-adfe-54d809b99654.png',
      '/images/20210111__NEIWAI36948_-eb5f8c5e-196b-4936-9513-f5b64ce159b6.png',
      '/images/20210422_Evy_2021BarelyZeroPackage18_1-f7299dbe-c197-49ca-b38b-1d2675726894.png',
      '/images/CopyofNW241WU1146_NW241WU1147-133d7f81-2200-482c-a020-07f688cbfbad.png',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
    description: 'Thin adjustable straps, no clasps, no underwire. The Strap Bra is the piece that defined the Barely Zero category — a bra worn for its absence rather than its presence. Made from CloudFit nylon, an adaptive blend developed to move with the body without binding.',
    details: {
      composition: '68% CloudFit nylon blend, 32% Spandex',
      care: 'Dissolve a gentle detergent in cold water (86°F/30°C max) and fully immerse. Gently press/knead, then rinse. Hang or lay flat to dry in a cool, shaded place.',
      fit: 'One size. Wire-free, foam-free, fully seamless — designed to disappear. Adapts across a wide range of body types.',
    },
    sensoryLine: 'The original. Still the standard.',
    lifestyleLine: 'The bra defined by its absence, not its presence.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable, moisture-wicking — an adaptive blend developed to move with the body without binding or compressing.',
        image: '/images/Barely%20Zore%20N202WU1116%20.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Wire-Free. Foam-Free.',
        description: 'Fully seamless construction. No visible edges, no seam imprints — a clean, barely-there feel under everything.',
        image: '/images/Barely%20Zero%20Spaghetti%20Strap%20Bra_Cinnamon%20Taste_03.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'One Size, Adaptive',
        description: 'One-size construction adapts across a wide range of body types — thin adjustable straps for a clean sightline under anything.',
        image: '/images/Barely%20Zero%20Spaghetti%20Strap%20Bra_Cinnamon%20Taste_05.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'anchor',
      },
    ],
  },
  {
    id: 'bra-004',
    slug: 'barely-zero-scallop-bra',
    name: 'Barely Zero Scallop Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Lotus Root', hex: '#D0C0B0', soldOut: true },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
      { name: 'Icy Purple', hex: '#C8C0D0', soldOut: true },
      { name: 'Treacly Almond', hex: '#D4B5A0', soldOut: true },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      // Black
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI158792.webp',
      // Two women (black + nude)
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI162012_eccd6926-58ef-4a36-9ddd-f76beec553d9.webp',
      '/images/Barely%20Zero%20Scallop%20Bra/Barely_Zero_Fixed_Cup_Wavy_3x4_1.webp',
      // Warm Bread
      '/images/Barely%20Zero%20Scallop%20Bra/20211217%20NEIWAI9121%20%E6%8B%B7%E8%B4%9D.jpg',
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI178131.webp',
      // Treacly Almond / Light nude
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI17747.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI158792.webp',
    description: 'A delicate scalloped V-neckline and fixed molded cups — the Scallop Bra brings structure to the Barely Zero collection without adding weight. Pull-on with no clasps or underwire. The cups stay fixed, the neckline stays crisp, and the silhouette remains invisible under clothing.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Cup retains shape wash after wash.',
      fit: 'Available in XS-S and M-L. Fixed cup with sculpted shape — slightly snug for natural shaping.',
    },
    sensoryLine: 'The scallop that holds its shape.',
    lifestyleLine: 'From meeting to dinner, without a thought.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Featuring a scalloped V-neckline and crease-resistant Bisous Cups™ that maintain shape all day. Provides lightweight structure, hugs your curves, and makes care effortless.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NO251WU1111_-3.jpg',
        imageObjectPosition: 'center 50%',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Adjustable Fit',
        description: 'Personalized strap adjustment paired with pull-on ease — the structure of a molded bra with the comfort of Barely Zero.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/20211220_NEIWAI2377_adjust.png',
        imageObjectPosition: 'center 30%',
        imageBackgroundColor: '#f5f5f5',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression — engineered support that adapts rather than restricts.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NW221WU1198%E6%9D%8F%E4%BB%81%E7%B2%89%20%E4%BE%A7%E9%9D%A2%20k%E5%8F%AF%E6%9B%BF%E6%8D%A2ajust%20.png',
        imageObjectPosition: 'center 50%',
        icon: 'anchor',
      },
      {
        number: '04',
        headline: 'Pull-On Simplicity',
        description: 'No clasps, no underwire, no adjustment. Seamless side panels for a smooth line under fitted tops.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/20211220%20NEIWAI2435%20%E6%8B%B7%E8%B4%9D%20pull%20on.jpg',
        imageObjectPosition: 'center 40%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-005',
    slug: 'barely-zero-scallop-clasp-bra',
    name: 'Barely Zero Scallop Clasp Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Dark Brown', hex: '#4A3830' },
      { name: 'Lotus Root', hex: '#D2C1B9' },
      { name: 'Treacly Almond', hex: '#DDD2C7' },
      { name: 'Black', hex: '#000000' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI180512.webp',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI18075.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI16321.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI162012.webp',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI15953.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI16012.jpg',
    ],
    hoverImage: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI180512.webp',
    description: 'The Scallop Clasp Bra adds a wave-inspired back clasp to the Fixed Cup Wavy silhouette — an upgrade that introduces fine-tuned fit without changing what the style does well. Bisous Cups™ for breathable, natural shaping. Flo Support™ for stay-put structure. The scallop neckline remains.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Minimal clasp-back closure for an adjustable, precise fit.',
    },
    sensoryLine: 'The Scallop, with adjustability.',
    lifestyleLine: 'The same scallop neckline. Fine-tuned fit.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Featuring a scalloped V-neckline and crease-resistant Bisous Cups™ that maintain shape all day. Provides lightweight structure, hugs your curves, and makes care effortless.',
        image: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/NO251WU1111_-3%20bious%20cup.jpg',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression — engineered support that adapts rather than restricts.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NW221WU1198%E6%9D%8F%E4%BB%81%E7%B2%89%20%E4%BE%A7%E9%9D%A2%20k%E5%8F%AF%E6%9B%BF%E6%8D%A2ajust%20.png',
        imageBackgroundColor: '#E9E7E4',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Clasp-Back Precision',
        description: 'Minimal clasp-back closure for an adjustable, precise fit with a seamless exterior — no visible hardware under clothing.',
        image: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/NO251WU1111_-2.jpg',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-006',
    slug: 'barely-zero-camisole',
    name: 'Barely Zero Camisole',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'camisole',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0781.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0788.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0775.webp',
      '/images/Barely%20Zero%20Camisole/BarelyZeroCamisole_1715.webp',
      '/images/Barely%20Zero%20Camisole/5.26_1705.webp',
      '/images/Barely%20Zero%20Camisole/5.26_1710.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp', description: 'Barely Zero integral cups built into a camisole body — full support without a separate bra underneath. The hem falls cleanly as a layer or on its own. The construction is the same as the rest of the Barely Zero collection: seamless, adaptive, designed to disappear.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold or machine wash gentle. Lay flat to dry.',
      fit: 'Available in XS-S and M-L. Thin adjustable straps. Smooth seamless construction — no visible lines under any fit.',
    },
    sensoryLine: 'The bra, extended.',
    lifestyleLine: 'Layered under linen or worn alone. One piece, no compromise.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Built-In Cups',
        description: 'Integral Barely Zero cups with full support — no separate bra required. The support system is part of the garment.',
        image: '/images/Barely%20Zero%20Camisole/NW242WF3204_7879ee2d-54b5-47a2-ae28-6a1ab2bc7fc5.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 30%',
      },
      {
        number: '02',
        headline: 'Seamless Construction',
        description: 'Smooth seamless throughout with thin adjustable straps — no visible lines under any fit, no compromise on shaping.',
        image: '/images/Barely%20Zero%20Camisole/BarelyZeroCamisole_1715.webp',
        icon: 'invisible',
        imageObjectPosition: 'center 30%',
      },
      {
        number: '03',
        headline: 'Layer or Wear Solo',
        description: 'Longer hem that layers cleanly under shirts and jackets or wears as a standalone top — one piece, two functions.',
        image: '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp',
        icon: 'comfort',
        imageObjectPosition: 'center 30%',
      },
    ],
  },
  {
    id: 'bra-007',
    slug: 'barely-zero-curvy-clasp-bra',
    name: 'Barely Zero Curvy Clasp Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Caramel', hex: '#B89070' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU11103_BarelyZeroFixedCupClasp_Caramel_OM_Side_5_1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9806_31049b84-59a1-47dd-8a8e-1e79c2c5e9a1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9841_eef02dff-4054-4e65-9e66-057e18941c88.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9877_06f5efa6-f794-4fa4-ac99-98437a729356.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU11103-_NW221WU1320_7f66eeae-e316-403c-a9db-c483409ed802.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU1320-01_0d6214d1-c83d-45a1-bce9-0ce6270403b3.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.webp', description: 'Flo Support™ and Bisous Cups™ — two technologies developed to bring the Barely Zero experience to fuller bust proportions. Structured where support is needed. Weightless everywhere else. Back clasp for adjustable fit. Note: this bra adapts to the body over the first few wears.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S–XL. If you\'re in between sizes, size up. Bra adapts to the body after first few wears.',
    },
    sensoryLine: 'Fuller cups. Still barely there.',
    lifestyleLine: 'Wireless support engineered for fuller bust proportions.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Soft interior structure engineered for fuller bust natural shaping — gentle contouring without rigid padding or underwire.',
        image: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU11103_BarelyZeroFixedCupClasp_Caramel_OM_Side_5_1.webp',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression or digging — full support through tension geometry, not hardware.',
        image: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NEI009_NW221WU11103_Barely-Zero-Fixed-Cup-Clasp_Caramel_OM_Detail_8.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 90%',
      },
      {
        number: '03',
        headline: 'Clasp-Back Precision',
        description: 'Minimal clasp-back closure for an adjustable, precise fit with a seamless exterior — no visible hardware under clothing.',
        image: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211220NEIWAI1753_2e461c61-fdad-4ea1-b160-dcdb20d2852b.%E5%90%8E%E8%83%8Cwebp.webp',
        icon: 'invisible',
        imageObjectPosition: 'center 30%',
      },
    ],
  },
  {
    id: 'bra-008',
    slug: 'barely-zero-curvy-bra',
    name: 'Barely Zero Curvy Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18116.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32353.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32371_a93fac00-e713-45b9-9f6e-802f7c672ba3.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32359.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17856_f73eee67-943b-42ce-9701-fd667ea7f404.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17865.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17954.jpg',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32513.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18116.webp', description: 'The Curvy Bra extends the Barely Zero wireless construction to a fuller cup range — wider straps, deeper anchored cups, and the same adaptive stretch fabric as the rest of the collection. Designed for everyday wear, postpartum, and body changes that standard sizing doesn\'t account for.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in S–XL. Wider straps distribute weight evenly. Deeper anchored cups for fuller proportions.',
    },
    sensoryLine: 'Wire-free for curves.',
    lifestyleLine: 'Everyday wear, postpartum, and everything in between.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32383%20adaptive.webp',
        icon: 'stretch',
        imageObjectPosition: 'center 65%',
      },
      {
        number: '02',
        headline: 'Anchored Cup Architecture',
        description: 'Cups for secure, natural shaping at fuller proportions — anchored at the base so they hold position throughout the day.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Wider Straps',
        description: 'Improved weight distribution and shoulder comfort — designed for fuller proportions without the strap dig of conventional bras.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18297%E8%82%A9%E5%B8%A6.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 38%',
        imageScale: 1.5,
      },
      {
        number: '04',
        headline: 'Everyday Versatility',
        description: 'Wire-free with body-hugging adaptive stretch fabric. Designed for everyday wear, nursing, and fluctuating fit — no compression, no digging.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17635%20versatility.jpg',
        icon: 'comfort',
        imageObjectPosition: 'center 20%',
      },
    ],
  },
  {
    id: 'bra-009',
    slug: 'barely-zero-curve-extra-support-bra',
    name: 'Barely Zero Curve Extra Support Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Vanilla Bean', hex: '#F0E8D8' },
      { name: 'Dark Chocolate', hex: '#3C2820' },
    ],
    sizes: ['S/M', 'L/XL'],
    images: [
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23076.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23109.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22745.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22768.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22756.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23076.webp', description: 'Fits a 37.5"–43.5" full bust, A–DDD cup. The Curve Extra Support Bra extends the Barely Zero range with an adjustable back clasp, wider spaghetti straps, and removable pads. The interior is modal-lined for breathability. The exterior is seamless.',
    details: {
      composition: 'Outer: 66% CloudFit nylon blend, 34% Spandex | Lining: 86% Modal, 14% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S/M and L/XL. Wider band and deeper cups for extra support.',
    },
    sensoryLine: 'The widest fit range in the collection.',
    lifestyleLine: 'For curves that need more without giving up comfort.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Extended Fit Range',
        description: 'Fits full bust 37.5"–43.5", A–DDD cup — designed for fluctuating sizes and easy gifting across the widest range in the collection.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622%20neiwai22728%20%281%29%20extended.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Adjustable Wide Straps',
        description: 'Wide spaghetti straps and back buckle closure for a customizable, secure fit that distributes weight comfortably.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/20260305-154700%E8%82%A9%E5%B8%A6.jpg',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Removable Pads',
        description: 'Wear with or without. Modal-lined interior for next-to-skin softness with 66% CloudFit nylon blend, 34% Spandex construction.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/CopyofNW241WU1146_NW241WU1147%E8%83%B8%E5%9E%AB%E6%94%B9%E8%89%B2.webp',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'bra-010',
    slug: 'barely-zero-breeze-bra',
    name: 'Barely Zero Breeze Bra',
    price: 55,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Sugar Swizzle', hex: '#E8E6E4' },
      { name: 'Lilac Ash', hex: '#B8A8BD' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_1.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_2.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25344%20%E6%8B%B7%E8%B4%9D.jpg',
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_flat.png',
    ],
    hoverImage: '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_1.webp', description: 'CloudFit fabric on the outside, real silk on the inside — the Breeze Bra is the warm-weather expression of the Barely Zero line. Minimal clasp-back with flat hardware that disappears under fabric. The 360° stretch maintains shape through repeated wear.',
    details: {
      composition: 'Outer: 67% Nylon, 33% Spandex. Inner: 54% Mulberry Silk, 46% Spandex.',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Back clasp with adjustable band. Anchored cups.',
    },
    sensoryLine: 'Silk-touch. Clasp back. For warmer days.',
    lifestyleLine: 'Made for warmth. Made for summer.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Silk-Touch Fabric',
        description: 'Outer layer: classic CloudFit fabric. Inner layer: real silk — a naturally cool, airy construction designed for warm weather wear and sensitive skin.',
        image: '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_1.webp',
        icon: 'breathe',
      },
      {
        number: '02',
        headline: 'Soft Clasp Back',
        description: 'Clasp-back closure with flat, minimal hardware — adjustable fit without bulk or pressure points.',
        image: '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25361%20%E6%8B%B7%E8%B4%9D.jpg',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: '360° Adaptive Stretch',
        description: 'Excellent stretch and full shape recovery through repeated wear and wash — lightweight with a subtle natural sheen.',
        image: '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25352%20%E6%8B%B7%E8%B4%9D.jpg',
        icon: 'stretch',
      },
    ],
  },
  // ── Pure Comfort Line ──────────────────────────────────────
  {
    id: 'bra-011',
    slug: 'pure-comfort-triangle-bra',
    name: 'Pure Comfort Triangle Bra',
    price: 49,
    category: 'bras',
    line: 'pure-comfort',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Ecru', hex: '#E8DED0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Nude Pink', hex: '#D8B8A8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24188.jpg?v=1753823243&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24194.jpg?v=1753823243&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24214.jpg?v=1753823332&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33944.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33824.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33952.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33915.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_2_4d59ab9f-d1f0-4e58-b397-3f46243bbeec.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_1_71c5cb61-41db-49a3-aa30-aaeae94f633d.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_edb7e685-1e33-4e3b-8a3b-b619303c0be8.jpg?v=1753896632&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_25.jpg?v=1771554054&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24188.jpg?v=1753823243&width=800', description: 'TENCEL™ Modal, cotton, and LYCRA® Spandex — a combination chosen for breathability, stretch recovery, and gentle contact with sensitive skin. Semi-fixed cups that provide soft support without foam. Convertible straps with a soft clasp. The 4.0 edition adds a sculpted pad shape that sits flat with no gapping.',
    details: {
      composition: '45% Modal, 45% Cotton, 10% LYCRA® Spandex',
      care: 'For best results, hand wash in cold water. Lay flat to dry. Do not iron.',
      fit: 'Available in XS–L. Semi-fixed cups tacked for easy laundering; stitching removable for unpadded preference.',
    },
    sensoryLine: 'Natural fibers. Second-skin fit.',
    lifestyleLine: 'Breathable, responsibly sourced, made for sensitive skin.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Natural Fiber Blend',
        description: 'TENCEL™ Modal + Supima® cotton — soft, breathable, and responsibly sourced materials against the skin.',
        image: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24188.jpg?v=1753823243&width=800',
        icon: 'breathe',
      },
      {
        number: '02',
        headline: 'Semi-Fixed Cup Design',
        description: 'Cups tacked for easy laundering with stitching removable for customization. Upgraded sculpted pad shape reduces flaring and gapping.',
        image: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24194.jpg?v=1753823243&width=800',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Convertible Construction',
        description: 'Convertible straps with soft back clasp — adjust the fit to your outfit and preference.',
        image: 'https://neiwai.life/cdn/shop/files/251117neiwai24141_1efcbfee-293a-45ec-921d-2c5bd2db7aa7.jpg?v=1769454776&width=800',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'bra-012',
    slug: 'pure-comfort-bandeau-bra',
    name: 'Pure Comfort Bandeau Bra',
    price: 39,
    category: 'bras',
    line: 'pure-comfort',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Ecru', hex: '#E8DED0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Nude Pink', hex: '#D8B8A8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/NO261WU1108_NO261WU1305_3_a7430362-c197-4d0b-aa9c-10be83c22654.jpg?v=1769454776&width=800',
      'https://neiwai.life/cdn/shop/files/251117neiwai24165_020d67fe-06ce-45df-8c73-8f26df8c70e4.jpg?v=1769454809&width=800',
      'https://neiwai.life/cdn/shop/files/251117neiwai24200_41011807-1f97-4bbb-ba71-ca69957bd586.jpg?v=1769454809&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/251117neiwai24165_020d67fe-06ce-45df-8c73-8f26df8c70e4.jpg?v=1769454809&width=800',
    description: 'The natural fiber answer to the strapless bra problem. TENCEL™ Modal and Supima® cotton in a 5/8 cup cut for A–C proportions — with a front keyhole for ventilation and fully adjustable straps that convert to racerback. Cotton-padded lining.',
    details: {
      composition: '46% TENCEL™ Modal, 44% Supima® cotton, 10% LYCRA® Spandex | padded lining: 100% cotton',
      care: 'For best results, hand wash in cold water. Lay flat to dry. Do not iron.',
      fit: 'Available in XS–L. A–C cup range. Fully adjustable straps convert to racerback.',
    },
    sensoryLine: 'Natural fiber. Strapless support.',
    lifestyleLine: 'Breathable, ventilated, strapless-ready.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Natural Fiber Construction',
        description: 'TENCEL™ Modal + Supima® cotton + LYCRA® Spandex blend for breathability, softness, and stretch in a single fabric.',
        image: 'https://neiwai.life/cdn/shop/files/NO261WU1108_NO261WU1305_3_a7430362-c197-4d0b-aa9c-10be83c22654.jpg?v=1769454776&width=800',
        icon: 'breathe',
      },
      {
        number: '02',
        headline: '5/8 Cup Silhouette',
        description: 'Natural shaping without heavy molded padding — a front keyhole detail for improved ventilation through warmer days.',
        image: 'https://neiwai.life/cdn/shop/files/251117neiwai24165_020d67fe-06ce-45df-8c73-8f26df8c70e4.jpg?v=1769454809&width=800',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Converts to Racerback',
        description: 'Fully adjustable straps convert to racerback configuration — strapless, standard, or crossed, one bra adapts to every neckline.',
        image: 'https://neiwai.life/cdn/shop/files/251117neiwai24200_41011807-1f97-4bbb-ba71-ca69957bd586.jpg?v=1769454809&width=800',
        icon: 'comfort',
      },
    ],
  },
  // ── Bandeau Line ──────────────────────────────────────────
  {
    id: 'bra-013',
    slug: 'bandeau-bra',
    name: 'Bandeau Bra',
    price: 39,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01147_1.jpg?v=1747859977&width=800',
      'https://neiwai.life/cdn/shop/files/WechatIMG55bc0a6f54fd27e9a6f6e8c12e84c4e4.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33787_1.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01229_1.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33762_1.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01105_1.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/WechatIMGab9b603a0e2e2b2d0274232c8b3018dc.jpg?v=1747866499&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_5.jpg?v=1747866739&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_6.jpg?v=1747866739&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01147_1.jpg?v=1747859977&width=800', description: 'A fixed shaping panel prevents the roll and fold that undoes most strapless styles — the critical construction detail in the Bandeau Bra. Breathable stretch fabric, stay-put coverage, and three wear configurations: strapless, straight, or crossed.',
    details: {
      composition: 'Breathable stretch poly-Spandex blend',
      care: 'Hand wash cold. Lay flat to dry.',
      fit: 'Available in XS–L. Three ways to wear: strapless, standard straps, or crossed at the back. Wire-free.',
    },
    sensoryLine: 'Three ways to wear it. Holds through all of them.',
    lifestyleLine: 'Fixed shaping. No rolling. No folding.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Fixed Shaping Panel',
        description: 'Holds position through movement without rolling or folding — the structural integrity that most strapless bras lack.',
        image: 'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_01147_1.jpg?v=1747859977&width=800',
        icon: 'anchor',
      },
      {
        number: '02',
        headline: 'Wide Seamless Band',
        description: 'Full coverage without compression — a smooth, broad band that holds the body gently rather than squeezing.',
        image: 'https://neiwai.life/cdn/shop/files/WechatIMG55bc0a6f54fd27e9a6f6e8c12e84c4e4.jpg?v=1747866499&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Three Ways to Wear',
        description: 'Strapless, standard straps, or crossed at the back. Wire-free, no underwire, no hardware — one bra, three configurations.',
        image: 'https://neiwai.life/cdn/shop/files/0216NEIWAI33787_1.jpg?v=1747866499&width=800',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'bra-014',
    slug: 'essential-bandeau-bra',
    name: 'Essential Bandeau Bra',
    price: 55,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19020.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19043.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19015.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19000.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19008.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19039.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI18992.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19036.jpg?v=1707104513&width=800',
      'https://neiwai.life/cdn/shop/files/NW241WU1120.jpg?v=1707104540&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20231122-NEIWAI19020.jpg?v=1707104513&width=800', description: 'Removable straps, a mesh panel for breathability, and a back clasp — the Essential Bandeau Bra is built for low-cut dressing without the compromises of typical strapless construction. Non-removable chest padding, wire-free, and designed to sit invisibly under open necklines.',
    details: {
      composition: 'Shell: 66% Polyamide, 34% Spandex | Mesh: 100% Polyamide | Lining: 100% Cotton',
      care: 'Hand wash in cold water. Line dry in the shade. Do not iron. Do not tumble dry.',
      fit: 'Available in XS–L. Removable straps convert between strapless, straight, and crossback.',
    },
    sensoryLine: 'The convertible strapless.',
    lifestyleLine: 'For low-cut dressing without compromise.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Convertible Straps',
        description: 'Removable straps convert between strapless, straight, and crossed configurations — adapt the bra to every neckline.',
        image: 'https://neiwai.life/cdn/shop/files/251116neiwai22654.jpg?v=1771356782&width=800',
        icon: 'comfort',
      },
      {
        number: '02',
        headline: 'Consistent Shaping',
        description: 'Non-removable chest padding for reliable shape that doesn\'t shift or require adjustment. Completely wire-free.',
        image: 'https://neiwai.life/cdn/shop/files/251116neiwai22644.jpg?v=1771356782&width=800',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Breathable Clasp Back',
        description: 'Back clasp closure with mesh panel for ventilation — adjustability and airflow in a single construction detail.',
        image: 'https://neiwai.life/cdn/shop/files/251116neiwai22646.jpg?v=1770669736&width=800',
        icon: 'breathe',
      },
    ],
  },
  // ── Swan ──────────────────────────────────────────────────
  {
    id: 'bra-015',
    slug: 'swan-bra',
    name: 'Swan Bra',
    price: 45,
    category: 'bras',
    line: 'swan',
    subcategory: 'bra',
    colors: [
      { name: 'Sphinx', hex: '#C8B8A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Brazilian Sand', hex: '#D8C0A8' },
      { name: 'Chocolate', hex: '#5C4030' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/Copyof20231122NEIWAI18240.jpg?v=1737054715&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof20231211NEIWAI157596.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof20231122NEIWAI18251.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof1030NEIWAI21391.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof20231211NEIWAI157567.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof1030NEIWAI21429.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof20231211NEIWAI157589.jpg?v=1763399485&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof1030NEIWAI21373.jpg?v=1737142026&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof1030NEIWAI21401.jpg?v=1737142026&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof_e84d6000-63da-4a71-93d9-72093cc76e54.jpg?v=1737142026&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof.jpg?v=1737142026&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof_0c4a9c0c-e186-4689-9dfe-951d3f6e05a0_1.jpg?v=1737142026&width=800',
      'https://neiwai.life/cdn/shop/files/Copyof_ae1e6c6b-8712-49ec-91b1-99a6c67b2f97.jpg?v=1737141998&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_2.jpg?v=1737141998&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_1.jpg?v=1737141998&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_3.jpg?v=1737141998&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_4.jpg?v=1737141998&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/Copyof20231122NEIWAI18240.jpg?v=1737054715&width=800', description: 'The Swan Bra is proportioned for V-neck and plunge silhouettes — a low, graceful neckline with molded cups that adapt to shape without heavy foam. Lightweight, adjustable straps, and a back hook-and-eye closure. Versatile enough for everyday wear and light activity.',
    details: {
      composition: '70% Polyamide, 30% Spandex',
      care: 'Hand wash with a light detergent in cold water.',
      fit: 'Available in XS–L. Low V-line silhouette. Adjustable straps; back hook-and-eye closure.',
    },
    sensoryLine: 'For deep necklines.',
    lifestyleLine: 'Sits invisibly under plunging and open necklines.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Low V-Line Silhouette',
        description: 'Sits invisibly under plunging and open necklines — proportioned specifically for deep-cut tops and dresses.',
        image: 'https://neiwai.life/cdn/shop/files/3d_smile_plunge_3x4_1.jpg?v=1728599123&width=800',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'Molded Cup Shaping',
        description: 'Soft inner pads for natural shaping and gentle lift — the structure of a push-up without the rigidity or weight.',
        image: 'https://neiwai.life/cdn/shop/files/20240531_65029.jpg?v=1721857893&width=800',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Flexible Fit',
        description: 'Lightweight flexible construction adapts to the body. Adjustable straps with back hook-and-eye closure for precision.',
        image: 'https://neiwai.life/cdn/shop/files/5.27_0033.jpg?v=1721857893&width=800',
        icon: 'stretch',
      },
    ],
  },
  // ── UltraFlex ─────────────────────────────────────────────
  {
    id: 'bra-016',
    slug: 'ultraflex-bra',
    name: 'UltraFlex Bra',
    price: 45,
    category: 'bras',
    line: 'ultraflex',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Sage Mist', hex: '#C0C8B8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/1120NEIWAI22503_b5c2c0d9-d523-4287-bff6-a03694bce266.jpg?v=1740007776&width=800',
      'https://neiwai.life/cdn/shop/files/WechatIMGe413cabe34953133303bf21f667bf45f_82acf792-6277-4800-868e-daac7f29281d.jpg?v=1740007776&width=800',
      'https://neiwai.life/cdn/shop/files/1120NEIWAI22454_00c1598e-a9dc-4c46-ae7e-6e296e010732.jpg?v=1740007776&width=800',
      'https://neiwai.life/cdn/shop/files/1120NEIWAI22484_d01fcfb8-6f32-43c4-bf3b-ca60926f75a8.jpg?v=1740007776&width=800',
      'https://neiwai.life/cdn/shop/files/1120NEIWAI22540_3d066212-e6cf-4d81-a367-7362cad796d8.jpg?v=1740007776&width=800',
      'https://neiwai.life/cdn/shop/files/NO251WU1106_-1.jpg?v=1740081560&width=800',
      'https://neiwai.life/cdn/shop/files/ultraflextriangle2.png?v=1740081560&width=800',
      'https://neiwai.life/cdn/shop/files/ultraflextriangle1.png?v=1740081560&width=800',
      'https://neiwai.life/cdn/shop/files/ultraflextriangle3.png?v=1740081560&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/1120NEIWAI22503_b5c2c0d9-d523-4287-bff6-a03694bce266.jpg?v=1740007776&width=800', description: '88% Cotton, 12% Spandex — a high-stretch cotton blend with the breathability of natural fibers and none of the stiffness. Semi-fixed triangle cups stay in position without foam or underwire. Adjustable straps with a comfortable, friction-free shoulder fit.',
    details: {
      composition: '88% Cotton, 12% Spandex',
      care: 'Hand wash with a light detergent in cold water.',
      fit: 'Available in XS–L. 360° adaptive stretch maintains shape across different body types.',
    },
    sensoryLine: 'Cotton that moves with you.',
    lifestyleLine: 'High-stretch, breathable, all-day natural comfort.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'UltraFlex Cotton',
        description: 'High-stretch, breathable cotton with full elastic recovery after wear — natural fiber performance without compromising comfort.',
        image: 'https://neiwai.life/cdn/shop/files/3d_smile_cutout_gray_1.jpg?v=1728599398&width=800',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Semi-Fixed Triangle Cup',
        description: 'Natural shaping without foam padding or underwire — the triangle silhouette at its most refined.',
        image: 'https://neiwai.life/cdn/shop/files/20240531_67664.jpg?v=1721859241&width=800',
        icon: 'molding',
      },
      {
        number: '03',
        headline: '360° Adaptive Stretch',
        description: 'Maintains shape and structure across daily wear. Adjustable shoulder straps with no friction or pressure at the shoulders.',
        image: 'https://neiwai.life/cdn/shop/files/20240531_67687.jpg?v=1721859241&width=800',
        icon: 'stretch',
      },
    ],
  },
  // ── Featherlight ──────────────────────────────────────────
  {
    id: 'bra-017',
    slug: 'featherlight-push-up-bra',
    name: 'Featherlight Push Up Bra',
    price: 49,
    category: 'bras',
    line: 'featherlight',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24010.jpg?v=1756252947&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23615.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24097.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24167.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23955.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23714.jpg?v=1756253163&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23651.jpg?v=1756252947&width=800',
      'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23705.jpg?v=1756252947&width=800',
      'https://neiwai.life/cdn/shop/files/20250829-094303.jpg?v=1756487268&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_6_1f62a791-110d-42db-aa1c-880d2395d621.jpg?v=1756487268&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_4_6bf038e0-bef2-4f63-8e5b-6192c763ed38.jpg?v=1756487427&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Blue_3_ba4a018a-525a-4b0a-9178-8ae026df5a9e.jpg?v=1756487427&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24010.jpg?v=1756252947&width=800', description: 'Molded cups, soft push-up padding, and a low V-neckline — a wire-free push-up construction that enhances shape without hardware or structural foam. Light enough to feel incidental. The Featherlight fabric maintains the barely-there feel the name promises.',
    details: {
      composition: 'Featherlight poly-Spandex blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in XS–L. Low V-neckline. Wire-free despite structured cup construction.',
    },
    sensoryLine: 'Lift without the weight.',
    lifestyleLine: 'Natural lift. No hardware, no structural foam.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Soft Push-Up Padding',
        description: 'Molded cups with gentle push-up lift — subtle, natural enhancement without digging or pinching.',
        image: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24010.jpg?v=1756252947&width=800',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Low V-Neckline',
        description: 'Sits cleanly under plunging cuts and low-cut tops — designed for necklines that demand a discreet bra.',
        image: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange23615.jpg?v=1756253163&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Wire-Free Structure',
        description: 'Structured cup construction without any underwire. Featherlight fabric throughout — no added weight from the support.',
        image: 'https://neiwai.life/cdn/shop/files/7_2NEIWAIOrange24097.jpg?v=1756253163&width=800',
        icon: 'anchor',
      },
    ],
  },
];

export const briefsProducts: Product[] = [
  {
    id: 'brief-001',
    slug: 'barely-zero-superlight-brief',
    name: 'Barely Zero Superlight Brief',
    price: 18,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
    ],
    sizes: ['One Size'],
    isNew: true,
    images: [
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_00783.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/20231124-NEIWAI_00263_63699f2c-48fc-4820-9e6a-185195902b4e.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33794.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/20231124-NEIWAI_00274.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI33800.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_00708.jpg?v=1753306860&width=800',
      'https://neiwai.life/cdn/shop/files/41e134ba8238c54a105cef101f669962.jpg?v=1753914594&width=800',
      'https://neiwai.life/cdn/shop/files/431f12c51621606092e5a4c5bddf2182.jpg?v=1753914594&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Yellow_d28ce2a0-ef47-4fe0-8bc8-2ff6d8fd0495.jpg?v=1753914594&width=800',
      'https://neiwai.life/cdn/shop/files/FlatLay_CroppingTemplate_Yellow_1_283cef06-5f95-4b31-8d91-30c08c34da0a.jpg?v=1753914594&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_00783.jpg?v=1753306860&width=800', description: 'A silicone grip along the rim keeps the Superlight Brief in position through activity — no riding, no adjustment. The back panel is seamless and non-restrictive. Built for movement without the bulk: lightweight, breathable, and invisible under anything.',
    details: {
      composition: 'Barely Zero adaptive nylon blend',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Silicone grip along waist rim holds position through workouts and everyday movement.',
    },
    sensoryLine: 'Superlight. Stays put.',
    lifestyleLine: 'From workouts to wind-downs — no riding, no adjustment.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Silicone Waist Grip',
        description: 'A silicone grip along the waist rim holds position through workouts and everyday movement — no sliding, no bunching.',
        image: 'https://neiwai.life/cdn/shop/files/20231129-NEIWAI_00783.jpg?v=1753306860&width=800',
        icon: 'anchor',
      },
      {
        number: '02',
        headline: 'No-Pinch Back Panel',
        description: 'Seamless, non-restrictive construction at the back — no digging, no compression lines, no irritation.',
        image: 'https://neiwai.life/cdn/shop/files/20231124-NEIWAI_00263_63699f2c-48fc-4820-9e6a-185195902b4e.jpg?v=1753306860&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Lightweight & Invisible',
        description: 'Breathable fabric designed for active and all-day wear. Seamless exterior with no visible lines under fitted clothing.',
        image: 'https://neiwai.life/cdn/shop/files/0216NEIWAI33794.jpg?v=1753306860&width=800',
        icon: 'breathe',
      },
    ],
  },
  {
    id: 'brief-002',
    slug: 'barely-zero-low-waist-brief',
    name: 'Barely Zero Low Waist Brief',
    price: 15,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Fluffy Peach', hex: '#E8C8B0' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
      { name: 'Champagne Wheat', hex: '#D8C8A8' },
      { name: 'Her Brownie', hex: '#8B6848' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Caramel', hex: '#B89070' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Taro Blush', hex: '#C8A8B0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33185_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33207_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33353_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI36943_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI36935_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210111NEIWAI33199_1.jpg?v=1736536548&width=800',
      'https://neiwai.life/cdn/shop/files/20210422_Evy_2021BarelyZeroPackage8_1.jpg?v=1736539657&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_32b048b5-68d9-4bbf-a86f-9177e910e1a7.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_2d1a962c-f14f-4ad2-94c4-86f16135857b.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_7891967c-9e09-4be8-9e50-0b87bd4839b7.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_84fa7d00-af4a-488c-ad4d-13db1703c83f.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_1_f93aedcc-3815-48f9-9415-9bf3e6ff69d3.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/N211WU2122_b33218d7-b8a9-4425-9ef0-d23ca91b59a1.jpg?v=1738200139&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1349_6d1d324c-b887-484d-9ae6-4df6362ea255.jpg?v=1736539657&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1349_08c9bb31-952d-43ed-84fc-207c41e7b326.jpg?v=1736539657&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1349_e5f68419-c637-4efe-bc1c-49bcdfddc6db.jpg?v=1736539657&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1349_013a9b7c-a9eb-4c6c-849b-cef1d4c312b3.jpg?v=1736539657&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=800', description: 'The Low Waist Brief adapts to the body from the first wear — no break-in period, no tight edges. CloudFit nylon for all-day breathability and moisture management. 100% cotton gusset lining. A clean low-rise profile that works under low-waist denim, wide-leg pants, or anything else.',
    details: {
      composition: '68% CloudFit nylon blend, 32% Spandex | Gusset: 100% Cotton',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Low-rise sits at the hip. Seamless exterior — no visible lines under fitted clothing.',
    },
    sensoryLine: 'Low rise. No show lines.',
    lifestyleLine: 'Sits low. Stays invisible. Works under everything.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Low-Rise Cut',
        description: 'Sits below the natural waist for a clean line under low-waisted pants, skirts, and activewear.',
        image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=800',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable, moisture-wicking, odor-reducing — the same adaptive fabric as the Barely Zero bra collection.',
        image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI33185_1.jpg?v=1736536548&width=800',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Cotton-Lined Comfort',
        description: '100% cotton gusset lining with moderate coverage — no digging at the legs or waist. Adapts from the first wear.',
        image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI33207_1.jpg?v=1736536548&width=800',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'brief-003',
    slug: 'barely-zero-mid-waist-brief',
    name: 'Barely Zero Mid Waist Brief',
    price: 19,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1180_NW221WU1320-1_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2770_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1320-01_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1180_NW221WU1320-2_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_100f79aa-d93b-499b-9b5d-8cf1273a134d.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_5506c1f4-cd26-408c-9408-69bbf2ee1e04.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_281f37f5-dbe1-4bea-81d1-62aed3ca7f16.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_cfdedc81-6994-48a8-98b3-69cbda41ed51.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_d7d35faf-8474-4738-950a-39ad694972f8.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_b8884f41-ed34-4873-9368-a30e791dde68.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_9342df04-93b8-48ea-86cb-ccc1ae3149a8.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_1f2ce942-53e3-4492-a70d-5c0e144c6efd.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_8a4ecdf9-0c7e-4140-81dc-d2368e5f30ef.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_7210e1cf-b21e-4224-bcaa-320a34878e51.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_0e192c84-06c3-48ad-b780-308d071e6eda.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_9fab14e5-159f-45fd-83ef-8ba1e3055184.jpg?v=1736546392&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800', description: 'Mid-rise, bonded leg openings, cotton gusset. The Mid Waist Brief 2.0 is the first in the Barely Zero brief range to come in two sizes — a wider fit range built for more body types. CloudFit nylon for moisture management; seamless profile throughout.',
    details: {
      composition: '67% CloudFit nylon blend, 33% Spandex | Lining: 100% Cotton',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'Available in XS–L. Mid-rise with full coverage. Seamless exterior.',
    },
    sensoryLine: 'Classic cut. Barely there.',
    lifestyleLine: 'More sizes, same disappearing act.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Classic Mid-Rise Cut',
        description: 'Full coverage and comfort all day and night — the first-choice brief for everyday wear.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'Bonded Leg Openings',
        description: 'No elastic imprint at the thigh — clean, smooth edges that leave no marks after extended wear.',
        image: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Two-Size Range',
        description: 'Available in two sizes for a wider range of body types. 100% cotton gusset lining for breathable comfort.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
        icon: 'stretch',
      },
    ],
  },
  {
    id: 'brief-004',
    slug: 'ultraflex-light-brief-3-pack',
    name: 'UltraFlex Light Brief 3-Pack',
    price: 30,
    category: 'briefs',
    line: 'ultraflex',
    subcategory: '3-pack',
    colors: [
      { name: 'Assorted Neutrals', hex: '#D4B5A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31471_1.jpg?v=1747855948&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31520_1.jpg?v=1747866926&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31477_1.jpg?v=1747866926&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31498_1.jpg?v=1747866926&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31488_1.jpg?v=1747866926&width=800',
      'https://neiwai.life/cdn/shop/files/0216NEIWAI31481_1.jpg?v=1747866926&width=800',
      'https://neiwai.life/cdn/shop/files/NO251WU1505_1.jpg?v=1747855948&width=800',
      'https://neiwai.life/cdn/shop/files/bs2.jpg?v=1748034273&width=800',
      'https://neiwai.life/cdn/shop/files/bs1.jpg?v=1748034273&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/0216NEIWAI31471_1.jpg?v=1747855948&width=800', description: 'The UltraFlex Light Brief is constructed without elastic at the waist or legs — a deliberate design choice that eliminates the marking and imprinting of conventional briefs. Featherlight fabric, high stretch, full hip coverage. Sold as a set of three.',
    details: {
      composition: '75% Polyamide, 25% Spandex',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Available in XS–L. Mid-rise. 3 briefs per pack in assorted neutrals.',
    },
    sensoryLine: 'No elastic. Nothing binding. Set of three.',
    lifestyleLine: 'High-stretch cotton comfort, three at a time.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'No Elastic Construction',
        description: 'No elastic at waist or legs — designed to be non-binding by construction, not just fit. Comfort without compromise.',
        image: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
        icon: 'comfort',
      },
      {
        number: '02',
        headline: 'Moisture-Wicking Lining',
        description: 'Cotton lining for all-day freshness with high-stretch fabric and full hip coverage in a seamless finish.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
        icon: 'breathe',
      },
      {
        number: '03',
        headline: 'Mid-Waist. Set of Three.',
        description: 'Mid-waist cut in a practical three-pack — the daily essential in the quantity that makes sense.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'brief-005',
    slug: 'ultraflex-cotton-brief-3-pack',
    name: 'UltraFlex Cotton Brief 3-Pack',
    price: 39,
    category: 'briefs',
    line: 'ultraflex',
    subcategory: '3-pack',
    colors: [
      { name: 'Assorted Neutrals', hex: '#D4B5A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
    description: 'UltraFlex Cotton — a high-stretch cotton blend with the breathability of natural fibers and the elasticity of performance fabric. Mid-waist silhouette, seamless edges, clean leg line. Three per set.',
    details: {
      composition: '89% Cotton, 11% Spandex',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Available in XS–L. Mid-rise. 3 briefs per pack in assorted neutrals.',
    },
    sensoryLine: 'High-stretch cotton. Set of three.',
    lifestyleLine: 'Soft cotton comfort, every day of the week.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'UltraFlex Cotton',
        description: 'Ultra-soft natural fiber with high stretch and full elastic recovery — the breathability of cotton with the performance of spandex.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Seamless Mid-Waist',
        description: 'Mid-waist design for flattering, secure coverage with seamless edges throughout — smooth finish, no imprinting.',
        image: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Three Per Set',
        description: 'Premium cotton briefs in a practical three-pack — the everyday essential designed for daily rotation.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
        icon: 'comfort',
      },
    ],
  },
];

export const leggingsProducts: Product[] = [
  {
    id: 'leg-001',
    slug: 'barely-zero-lycra-leggings',
    name: 'Barely Zero Lycra Leggings',
    price: 49,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    isNew: true,
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/products/NW222WF4108_6c0cf425-aeaa-470b-b8e9-e11eb1cda5e3.jpg?v=1681238454&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56458.jpg?v=1681238454&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/products/20220628NEIWAI56458.jpg?v=1681238454&width=800',
    description: 'The Lycra Leggings are a heavier-weight interpretation of the Barely Zero construction — the same adaptive CloudFit nylon, denser for cooler weather and all-day outdoor wear. Double-layered waistband, high-waist silhouette, no side seams. Fits waist 24.5"–34.5", hips 31.5"–39.5".',
    details: {
      composition: '82% CloudFit nylon, 18% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise, fitted through the thigh. Seamless waistband.',
    },
    sensoryLine: 'Thicker. Warmer. All day.',
    lifestyleLine: 'Performs without announcing itself.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Thicker Lycra Construction',
        description: 'Warmer than standard Barely Zero leggings — a heavier-weight fabric for cooler months and transition seasons.',
        image: 'https://neiwai.life/cdn/shop/products/NW222WF4108_6c0cf425-aeaa-470b-b8e9-e11eb1cda5e3.jpg?v=1681238454&width=800',
        icon: 'durability',
      },
      {
        number: '02',
        headline: 'Adaptive CloudFit Nylon',
        description: 'Conforms to the body without compression. Double-layered high-waist panel that lies flat, smooth, with no rolling.',
        image: 'https://neiwai.life/cdn/shop/products/20220628NEIWAI56458.jpg?v=1681238454&width=800',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Clean Silhouette',
        description: 'No side stitching, ankle-length. Fits waist 24.5"–34.5", hips 31.5"–39.5" — a seamless line from waist to ankle.',
        image: 'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'leg-002',
    slug: 'barely-zero-flow-leggings',
    name: 'Barely Zero Flow Leggings',
    price: 39,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    colors: [
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Sage Mist', hex: '#C0C8B8' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
      'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=800',
      'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=800',
    description: 'The Flow Leggings extend the adaptive construction of the Barely Zero underwear range into a full-length outerwear legging — the same second-skin CloudFit nylon, now designed to wear beyond the home. Ankle-length, double-layered waistband, no side seams. Fits waist 24.5"–34.5", hips 31.5"–39.5".',
    details: {
      composition: '86% CloudFit nylon, 14% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise with gentle compression. Seamless waistband.',
    },
    sensoryLine: 'The Barely Zero fit. Full length.',
    lifestyleLine: 'From couch to café without a second thought.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable construction designed to conform without compression — the Barely Zero fabric at full length.',
        image: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Double-Layer Waistband',
        description: 'High-waist panel holds flat with no rolling at the waistband — stays in position through movement and wear.',
        image: 'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=800',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Seamless Construction',
        description: 'No side stitching for a clean silhouette. Ankle-length, fits waist 24.5"–34.5", hips 31.5"–39.5".',
        image: 'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'leg-003',
    slug: 'barely-zero-flow-shorts',
    name: 'Barely Zero Flow Shorts',
    price: 35,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'shorts',
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
      'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
      'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
    description: 'The same CloudFit nylon construction as the Flow Leggings in a bike-short length. High-waist double-layered panel, no side seams, anti-compression by design. Wears from morning through evening, active or at rest. Fits waist 24.5"–34.5", hips 31"–40".',
    details: {
      composition: '86% CloudFit nylon, 14% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise biker short length. Seamless waistband.',
    },
    sensoryLine: 'The Barely Zero fit. Shorter.',
    lifestyleLine: 'Anti-chafe, adaptive, invisible under everything.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Same adaptive fabric as the Flow Leggings — consistent feel across the range with breathable, moisture-wicking performance.',
        image: 'https://neiwai.life/cdn/shop/products/1222_46833.jpg?v=1706565268&width=800',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Double-Layer Waistband',
        description: 'High-waist panel that stays in position through movement. Anti-compression construction — no squeezing or binding.',
        image: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=800',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Bike-Short Length',
        description: 'No side stitching. Fits waist 24.5"–34.5", hips 31"–40" — the shorter alternative with identical construction quality.',
        image: 'https://neiwai.life/cdn/shop/products/20220628NEIWAI56395.jpg?v=1681238454&width=800',
        icon: 'invisible',
      },
    ],
  },
];

export const allProducts: Product[] = [
  ...brasProducts,
  ...briefsProducts,
  ...leggingsProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsByLine(line: string): Product[] {
  return allProducts.filter((p) => p.line === line);
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  const sameLine = allProducts.filter(
    (p) => p.id !== product.id && p.line === product.line
  );
  const sameCategory = allProducts.filter(
    (p) => p.id !== product.id && p.category === product.category && p.line !== product.line
  );
  return [...sameLine, ...sameCategory].slice(0, limit);
}

/** Matching brief from the same line for "Complete the Set" (bra PDP). */
export function getMatchingSetBrief(product: Product): Product | undefined {
  return allProducts.find(
    (p) => p.category === 'briefs' && p.line === product.line
  );
}

/** Up to N briefs from the same line for "Complete the set" (match Vercel: two briefs). */
export function getMatchingSetBriefs(product: Product, limit: number = 2): Product[] {
  return allProducts
    .filter((p) => p.category === 'briefs' && p.line === product.line)
    .slice(0, limit);
}

/** "You may also like" for bras PDP — fixed 5 products matching neiwai-us-site3.vercel.app. */
const YOU_MAY_ALSO_LIKE_BRAS_SLUGS = [
  'barely-zero-anchored-cup-strap-bra',
  'barely-zero-anchored-cup-signature-bra',
  'barely-zero-scallop-bra',
  'barely-zero-scallop-clasp-bra',
  'barely-zero-camisole',
  'barely-zero-strap-bra',
] as const;

export function getYouMayAlsoLikeBras(currentProduct: Product, limit: number = 5): Product[] {
  const pool = YOU_MAY_ALSO_LIKE_BRAS_SLUGS.map((s) => allProducts.find((p) => p.slug === s)).filter(
    (p): p is Product => !!p && p.id !== currentProduct.id
  );
  return pool.slice(0, limit);
}

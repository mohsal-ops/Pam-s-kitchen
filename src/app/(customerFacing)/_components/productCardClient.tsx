// Single source of truth for every brand-specific value on the site.
// To onboard a new restaurant client, this is the only file that should
// need to change (plus swapping image assets in /public).
// Optional sections. Flip a flag to false to remove that section from the
// navbar + footer. The route still exists, it is simply not linked.

const FEATURES = {
  catering: true,
  giftCard: false,
  rewards: false,
  blog: true,
};

type FeatureKey = keyof typeof FEATURES;

type NavLink = {
  label: string;
  href: string;
  feature?: FeatureKey;
};

const ALL_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering" },
  { label: "Gift Card", href: "/GiftCard", feature: "giftCard" },
  { label: "Rewards", href: "/rewards", feature: "rewards" },
  { label: "Press", href: "/Blog", feature: "blog" },
  { label: "Our Story", href: "/story" },
];

const ALL_FOOTER_LINKS: NavLink[] = [
  { label: "Menu", href: "/Menu" },
  { label: "Catering", href: "/catering", feature: "catering" },
  { label: "Gift Cards", href: "/GiftCard", feature: "giftCard" },
  { label: "Terms", href: "/terms" },
];

const enabled = (l: NavLink) => !l.feature || FEATURES[l.feature];

const pickLink = ({ label, href }: NavLink) => ({ label, href });

export const SITE_CONFIG = {
  // Brand
  name: "Tee Ruk Thai",
  tagline: "Authentic Thai Street Food",
  subTagline:
    "Fresh, flavorful Thai street food made to order from our food truck in Philadelphia.",

  legalName: "Tee Ruk Thai",
  trademark: "Tee Ruk Thai",

  // Admin intro animation:
  // "burger" (fast food) | "coffee" (café) | "pizza" (pizzeria)
  loaderStyle: "burger",

  // Main call-to-action button label
  menuCtaLabel: "Order now",

  // Contact & Location
  address: "Drexel Food Truck Alley, 31st & Ludlow, Philadelphia, PA",
  street: "31st & Ludlow",
  city: "Philadelphia",
  state: "PA",
  zip: "19104",

  phone: "000-000-0000",
  email: "hello@tee-ruk-thai.com",
  cateringEmail: "hello@tee-ruk-thai.com",

  timezone: "America/New_York",

  lat: 0,
  lng: 0,

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Drexel+Food+Truck+Alley+31st+and+Ludlow+Philadelphia+PA",

  // Social
  instagram: "teeruk_thai",
  instagramUrl: "https://www.instagram.com/teeruk_thai/",

  facebookUrl:
    "https://www.facebook.com/profile.php?id=61564310883219",

  tiktokUrl: "",

  beholdFeedId: "",

  // SEO
  siteUrl: "https://tee-ruk-thai.vercel.app",

  seoTitle:
    "Tee Ruk Thai | Authentic Thai Street Food in Philadelphia",

  seoDescription:
    "Tee Ruk Thai serves authentic Thai street food fresh to order from our food truck in Philadelphia.",

  seoKeywords: [
    "Thai food Philadelphia",
    "Thai food truck Philadelphia",
    "Thai street food Philadelphia",
    "Tee Ruk Thai",
    "Thai food Drexel",
    "Drexel food truck",
    "Thai food near Drexel University",
    "Philadelphia food trucks",
    "halal Thai food Philadelphia",
  ],

  ogImage: "/general/generalPages/mainImage.jpg",

  // Structured-data / business info
  cuisines: ["Thai", "Asian", "Street Food"],

  priceRange: "$$",

  // Colors
  primaryColor: "#166534",
  secondaryColor: "#111111",
  accentColor: "#d4a72c",

  // Hours
  // Screenshot shows operating hours around 11:15 AM - 5:30 PM.
  // Update these once you have the confirmed weekly schedule.
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: 11.25, close: 17.5 },
    { day: "Tuesday", open: 11.25, close: 17.5 },
    { day: "Wednesday", open: 11.25, close: 17.5 },
    { day: "Thursday", open: 11.25, close: 17.5 },
    { day: "Friday", open: 11.25, close: 17.5 },
    { day: "Saturday", open: null, close: null },
  ] as {
    day: string;
    open: number | null;
    close: number | null;
  }[],

  // Home page text sections
  home: {
    heroHeadline: "Authentic Thai street food",
    heroSubHeadline:
      "Fresh, flavorful Thai dishes made to order in Philadelphia.",

    galleryTitle: "Tee Ruk Thai",
    gallerySubtitle: "Authentic Thai Street Food",

    distinctiveFeatures: [
      {
        title: "Authentic Thai street food",
        description:
          "Traditional Thai-inspired dishes prepared fresh to order with bold flavors and vibrant ingredients.",
        image: "/general/generalPages/enjoy.jpg",
      },
      {
        title: "Fresh made-to-order meals",
        description:
          "From Thai basil fried rice to Pad Kra Pao and other Thai favorites, every meal is prepared fresh.",
        image: "/general/generalPages/vibe.jpg",
      },
    ],

    featuring: [
      {
        name: "Takeaway",
        icon: "PiPackageFill",
      },
      {
        name: "Halal",
        icon: "MdOutlineFamilyRestroom",
      },
      {
        name: "Catering",
        icon: "BsBagCheckFill",
      },
      {
        name: "Fresh to Order",
        icon: "TbPlant2Off",
      },
    ],

    faq: [
      {
        question: "What are you known for?",
        answer:
          "Tee Ruk Thai is known for authentic Thai street food, including Thai basil dishes, fried rice, Pad Kra Pao, and other fresh Thai favorites.",
      },
      {
        question: "Where are you located?",
        answer:
          "We're located at the Drexel Food Truck Alley at 31st & Ludlow in Philadelphia.",
      },
      {
        question: "Do you offer halal food?",
        answer:
          "Yes. Tee Ruk Thai is a halal Thai food truck.",
      },
      {
        question: "Do you offer catering or takeout?",
        answer:
          "Yes! We offer takeaway and catering. Contact us for catering details and availability.",
      },
      {
        question: "Is the food made fresh?",
        answer:
          "Yes. Our Thai street food is made fresh to order using flavorful ingredients and traditional Thai-inspired recipes.",
      },
    ],
  },

  // Which optional sections are enabled
  features: FEATURES,

  // Navbar links
  navLinks: ALL_NAV_LINKS.filter(enabled).map(pickLink),

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} Tee Ruk Thai. All rights reserved.`;
    },

    links: ALL_FOOTER_LINKS.filter(enabled).map(pickLink),
  },
};

export type SiteConfig = typeof SITE_CONFIG;

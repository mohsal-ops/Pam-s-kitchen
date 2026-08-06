// Single source of truth for every brand-specific value on the site.
// To onboard a new restaurant client, this is the only file that should
// need to change (plus swapping image assets in /public).

// Optional sections. Flip a flag to false to remove that section from the
// navbar + footer (the new-project tool sets these per client). The route
// still exists, it is simply not linked.
const FEATURES = {
  catering: true,
  giftCard: true,
  rewards: true,
  blog: true,
};
type FeatureKey = keyof typeof FEATURES;

type NavLink = { label: string; href: string; feature?: FeatureKey };

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
  name: "The Wagon Wheel",
  tagline: "Eagle Pass' viral Texas BBQ",
  subTagline:
    "Slow-smoked brisket, sausage, ribs, and Texas-size chicken fried steaks in Eagle Pass, TX.",
  legalName: "The Wagon Wheel",
  trademark: "The Wagon Wheel",

  // Main call-to-action button label, used on every "menu" button across the
  // site. Set it to whatever fits: "Order now", "View our menu", "See the menu"…
  menuCtaLabel: "Order now",

  // Contact & Location
  // NOTE: exact street address + phone are placeholders - update with the real ones.

  address: "1824 Del Rio Blvd, Eagle Pass, TX 78852",
  street: "1824 Del Rio Blvd",
  city: "Eagle Pass",
  state: "TX",
  zip: "78852",
  phone: "830-513-7250",
  email: "wws78852@gmail.com",
  cateringEmail: "wws78852@gmail.com",
  timezone: "America/Chicago",
  lat: 28.7091,
  lng: -100.4995,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The%20Wagon%20Wheel%2C%20Eagle%20Pass%2C%20TX",

  // Social
  instagram: "thewagonwheel.co",
  instagramUrl: "https://www.instagram.com/thewagonwheel.co/",
  facebookUrl: "",
  tiktokUrl: "",
  beholdFeedId: "",

  // SEO
  siteUrl: "https://thewagonwheel.co",
  seoTitle:
    "The Wagon Wheel | Texas BBQ & Chicken Fried Steaks in Eagle Pass, TX",
  seoDescription:
    "The Wagon Wheel serves slow-smoked Texas brisket, sausage, pork ribs, and Texas-size chicken fried steaks in Eagle Pass, TX. Eagle Pass' viral BBQ destination.",
  seoKeywords: [
    "BBQ Eagle Pass TX",
    "brisket Eagle Pass",
    "chicken fried steak Eagle Pass",
    "Texas barbecue Eagle Pass",
    "BBQ catering Eagle Pass",
    "The Wagon Wheel Eagle Pass",
  ],
  ogImage: "/general/generalPages/mainImage.jpg",

  // Structured-data / business info (used in JSON-LD)
  cuisines: ["Barbecue", "American", "Texan"],
  priceRange: "$$",

  // Colors (Tailwind hex values)
  primaryColor: "#b91c1c",
  secondaryColor: "#1a1a1a",
  accentColor: "#dc2626",

  // Hours (used for open/closed status) - hour values are 24h local time
  hours: [
    { day: "Sunday", open: 11, close: 18 },
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: 11, close: 20 },
    { day: "Wednesday", open: 11, close: 20 },
    { day: "Thursday", open: 11, close: 20 },
    { day: "Friday", open: 11, close: 21 },
    { day: "Saturday", open: 11, close: 21 },
  ] as { day: string; open: number | null; close: number | null }[],

  // Home page text sections
  home: {
    heroHeadline: "Eagle Pass' viral Texas BBQ",
    heroSubHeadline: "smoked brisket & Texas-size chicken fried steaks",
    galleryTitle: "The Wagon Wheel",
    gallerySubtitle: "Eagle Pass Texas BBQ",
    distinctiveFeatures: [
      {
        title: "Slow-smoked Texas BBQ",
        description:
          "Brisket, sausage, and pork ribs smoked low and slow over Texas post oak, finished with our homemade BBQ sauce. The real deal, every day.",
        image: "/general/generalPages/enjoy.jpg",
      },
      {
        title: "Texas-size chicken fried steaks",
        description:
          "Hand-breaded and cooked to order, smothered in generous gravy - the Texas-size plates Eagle Pass keeps coming back for.",
        image: "/general/generalPages/vibe.jpg",
      },
    ],
    featuring: [
      { name: "Takeaway", icon: "PiPackageFill" },
      { name: "Family friendly", icon: "MdOutlineFamilyRestroom" },
      { name: "Catering", icon: "BsBagCheckFill" },
      { name: "Daily Specials", icon: "TbPlant2Off" },
    ],
    faq: [
      {
        question: "What are you known for?",
        answer:
          "Slow-smoked Texas brisket, sausage, and our Texas-size chicken fried steaks - we're Eagle Pass' viral BBQ spot.",
      },
      {
        question: "What do you serve?",
        answer:
          "Smoked brisket, sausage, pork ribs, Texas Twinkles, hand-breaded chicken fried steaks, brisket sandwiches and mini tacos, plus classic sides like mac & cheese and cream corn.",
      },
      {
        question: "Do you offer catering or takeout?",
        answer:
          "Yes! We do takeout and catering - give us a call and we'll have your order ready.",
      },
      {
        question: "Where are you located?",
        answer: "We're in Eagle Pass, TX.",
      },
    ],
  },

  // Which optional sections are enabled (see FEATURES above)
  features: FEATURES,

  // Navbar links (derived from FEATURES)
  navLinks: ALL_NAV_LINKS.filter(enabled).map(pickLink),

  // Footer
  footer: {
    get copyright() {
      return `© ${new Date().getFullYear()} The Wagon Wheel. All rights reserved.`;
    },
    links: ALL_FOOTER_LINKS.filter(enabled).map(pickLink),
  },
};

export type SiteConfig = typeof SITE_CONFIG;

import type { Metadata } from "next";
import GamesSection from "./components/sections/GamesSection";
import HeroSection from "./components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Kids Zone | Free Games for Kids at The Wagon Wheel",
  description:
    "The Wagon Wheel is a family and kids restaurant in Eagle Pass, TX. While you wait for Texas BBQ, play free games in our Kids Zone.",
  keywords: [
    "kids restaurant Eagle Pass",
    "family restaurant Eagle Pass",
    "kids games The Wagon Wheel",
  ],
  alternates: {
    canonical: "/KidsZone",
  },
  openGraph: {
    title: "Kids Zone | The Wagon Wheel Eagle Pass",
    description:
      "A family-friendly Eagle Pass restaurant with a Kids Zone full of free games.",
    url: "/KidsZone",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <main>
        <HeroSection />
        <GamesSection />
      </main>
    </div>
  );
};

export default Index;

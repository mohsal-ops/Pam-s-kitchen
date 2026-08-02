import type { Metadata } from "next";
import db from "@/db/db";
import StoryClient from "./_components/StoryClient";
import { getSiteImage } from "@/lib/getSiteImages";

export const metadata: Metadata = {
  title: "Our Story | Homemade Comfort Food in Eagle Pass, TX",
  description:
    "The story behind The Wagon Wheel - a family-owned kitchen in Eagle Pass, TX serving fresh homemade breakfast, burgers, and daily specials.",
  keywords: [
    "The Wagon Wheel Eagle Pass story",
    "family owned restaurant Eagle Pass",
    "homemade food Eagle Pass history",
    "The Wagon Wheel owners",
  ],
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Our Story | The Wagon Wheel Eagle Pass",
    description:
      "The family story behind The Wagon Wheel - homemade comfort food in Eagle Pass, TX.",
    url: "/story",
  },
};

export default async function Page() {
  const [partners, storyHero, storyOrigin, storyClosing] = await Promise.all([
    db.partner.findMany({ orderBy: { order: "asc" } }),
    getSiteImage("story_hero"),
    getSiteImage("story_origin"),
    getSiteImage("story_closing"),
  ]);

  return (
    <StoryClient
      partners={partners}
      images={{ story_hero: storyHero, story_origin: storyOrigin, story_closing: storyClosing }}
    />
  );
}
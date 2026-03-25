import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Sketch Space",
  description:
    "Real-time collaboration, versatile canvas, rich media, secure.",
  keywords: [
    "nextjs",
    "miro",
    "board",
    "draw",
    "convex",
    "clerk",
    "convex",
    "real-time",
    "collaboration",
  ] as Array<string>,
  authors: {
    name: "Taher Maimoon",
    url: "https://github.com/TaherM18",
  },
} as const;

export const links = {
  sourceCode: "https://github.com/TaherM18/SketchSpace",
} as const;

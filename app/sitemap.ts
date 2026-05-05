import type { MetadataRoute } from "next";

const baseUrl = "https://khlongsonmarina.com";
const routes = [
  "",
  "/berthing",
  "/services",
  "/tours",
  "/transfers",
  "/gallery",
  "/contact",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

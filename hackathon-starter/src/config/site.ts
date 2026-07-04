import { DEFAULT_METADATA } from "@/constants";

export const siteConfig = {
  name: DEFAULT_METADATA.title,
  description: DEFAULT_METADATA.description,
  url: DEFAULT_METADATA.url,
  ogImage: `${DEFAULT_METADATA.url}/og.png`,
  links: {
    github: "https://github.com",
  },
  author: "Hackathon Starter Team",
};

export type SiteConfig = typeof siteConfig;

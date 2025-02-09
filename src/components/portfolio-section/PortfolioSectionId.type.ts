export const PortfolioSections = [
  "about-me",
  "skills",
  "projects",
  "resume",
  "contact",
] as const;

export type PortfolioSectionId = (typeof PortfolioSections)[number];

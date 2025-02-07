import { useState } from "react";
import { PortfolioSectionId } from "../../components/portfolio-section/portfolioSectionId.type";

export const useSelectSection = () => {
  const [selected, setSelected] = useState<PortfolioSectionId | null>(null);

  const selectSection = (sectionId: PortfolioSectionId | null) => {
    setSelected((prev) => (prev !== sectionId ? sectionId : null));
  };

  return { selected, selectSection };
};

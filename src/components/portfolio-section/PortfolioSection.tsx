import {
  PortfolioSectionId,
  PortfolioSections,
} from "./PortfolioSectionId.type";

interface PortfolioSectionProps {
  children?: React.ReactNode;
  className?: string;
  portfolioSection: PortfolioSectionId;
  selectSection: (portfolioSectionId: PortfolioSectionId | null) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  children,
  className = "",
  portfolioSection,
  selectSection,
}) => {
  const basicStyles: string = `text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400`;
  const hoverEffects: string = `hover:inset-ring hover:inset-ring-2 hover:inset-shadow-xs hover:inset-shadow-indigo-500 cursor-pointer`;
  const focusEffects: string = `focus:outline-none focus:inset-ring focus:inset-ring-2 focus:inset-shadow-xs focus:inset-shadow-indigo-500`;

  const portfolioSectionTabIndex: number | null =
    PortfolioSections.indexOf(portfolioSection);

  return (
    <section
      role="button"
      tabIndex={portfolioSectionTabIndex}
      id={portfolioSection}
      className={`${basicStyles} ${hoverEffects} ${focusEffects} ${className}`}
      onClick={() => selectSection(portfolioSection)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          selectSection(portfolioSection);
        }
      }}
    >
      {portfolioSection.toUpperCase()}
      {children}
    </section>
  );
};

export default PortfolioSection;

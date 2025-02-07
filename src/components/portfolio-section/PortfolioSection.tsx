import { PortfolioSectionId } from "../../components/portfolio-section/portfolioSectionId.type";

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
  return (
    <section
      id={portfolioSection}
      className={`text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400 ${className}`}
      onClick={() => selectSection(portfolioSection)}
    >
      {portfolioSection.toUpperCase()}
      {children}
    </section>
  );
};

export default PortfolioSection;

import "./App.css";
import BentoBoxSideWrapper from "./components/bento-box-side-wrapper/BentoBoxSideWrapper";
import PortfolioSection from "./components/portfolio-section/PortfolioSection";
import { useSelectSection } from "./components/portfolio-section/useSelectedSection";
import AboutMe from "./components/sections/AboutMe";

function App() {
  const { selected, selectSection } = useSelectSection();

  return (
    <main
      id="layout"
      className="bg-backgound/90 items-center justify-center gap-6 sm:flex-col sm:overflow-scroll md:flex md:h-screen md:flex-row md:p-6"
    >
      <BentoBoxSideWrapper
        side="left"
        className={`${selected === "skills" ? "" : "gap-6"}`}
      >
        <section
          id="about-me-wrapper"
          className={`text-primary-text text-xl transition-all duration-400 ${selected === "skills" ? "srink h-[0px]" : "h-3/4"}`}
        >
          <AboutMe />
        </section>
        <PortfolioSection
          portfolioSection="skills"
          className={`${selected === "skills" ? "h-full" : "h-1/4"}`}
          selectSection={selectSection}
        />
      </BentoBoxSideWrapper>
      <BentoBoxSideWrapper
        side="right"
        className={`${selected === "contact" || selected === "projects" || selected === "resume" ? "" : "gap-6"}`}
      >
        <PortfolioSection
          portfolioSection="projects"
          className={`${selected === "contact" || selected === "resume" ? "srink h-[0px] opacity-0" : ""} ${selected === "projects" ? "h-full" : "h-3/8"}`}
          selectSection={selectSection}
        />
        <PortfolioSection
          portfolioSection="resume"
          className={`${selected === "contact" || selected === "projects" ? "srink h-[0px] opacity-0" : ""} ${selected === "resume" ? "h-full" : "h-3/8"}`}
          selectSection={selectSection}
        />
        <PortfolioSection
          portfolioSection="contact"
          className={`${selected === "resume" || selected === "projects" ? "srink h-[0px] opacity-0" : ""} ${selected === "contact" ? "h-full" : "h-2/8"}`}
          selectSection={selectSection}
        />
      </BentoBoxSideWrapper>
    </main>
  );
}

export default App;

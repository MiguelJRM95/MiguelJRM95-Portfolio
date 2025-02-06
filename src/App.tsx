import { useState } from "react";
import "./App.css";

type ElementId = "about-me" | "skills" | "proyects" | "resume" | "contact";

function App() {
  const [selected, setSelected] = useState<ElementId | null>(null);

  const toggleExpansion = (element: ElementId | null) => {
    console.log(element);
    if (!selected || selected !== element) {
      setSelected(element);
      return;
    }
    setSelected(null);
  };

  return (
    <main
      id="layout"
      className="bg-backgound/90 items-center justify-center gap-6 sm:flex-col sm:overflow-scroll md:flex md:h-screen md:flex-row md:p-6"
    >
      <div
        id="left-bento-box"
        className={`flex h-[100%] flex-col overflow-y-hidden sm:w-full sm:pt-6 md:w-[40%] md:pt-0 ${selected === "skills" ? "" : "gap-6"}`}
      >
        <div
          id="about-me"
          className={`text-primary-text text-2xl font-bold transition-all duration-400 ${selected === "skills" ? "srink h-[0px]" : "h-3/4"}`}
        >
          ABOUT ME
        </div>
        <div
          id="skills"
          className={`text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400 ${selected === "skills" ? "h-full" : "h-1/4"}`}
          onClick={() => toggleExpansion("skills")}
        >
          SKILLS
        </div>
      </div>
      <div
        id="right-bento-box"
        className={`flex h-[100%] flex-col overflow-y-hidden rounded-3xl text-2xl font-bold sm:w-full sm:pb-6 md:w-[60%] md:pb-0 ${selected === "contact" || selected === "proyects" || selected === "resume" ? "" : "gap-6"}`}
      >
        <div
          id="proyects"
          className={`text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400 ${selected === "contact" || selected === "resume" ? "srink h-[0px] opacity-0" : ""} ${selected === "proyects" ? "h-full" : "h-3/8"}`}
          onClick={() => toggleExpansion("proyects")}
        >
          PROYECTS
        </div>
        <div
          id="resume"
          className={`text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400 ${selected === "contact" || selected === "proyects" ? "srink h-[0px] opacity-0" : ""} ${selected === "resume" ? "h-full" : "h-3/8"}`}
          onClick={() => toggleExpansion("resume")}
        >
          RESUME
        </div>
        <div
          id="contact"
          className={`text-primary-text bg-accent rounded-3xl text-2xl font-bold transition-all duration-400 ${selected === "resume" || selected === "proyects" ? "srink h-[0px] opacity-0" : ""} ${selected === "contact" ? "h-full" : "h-2/8"}`}
          onClick={() => toggleExpansion("contact")}
        >
          CONTACT
        </div>
      </div>
    </main>
  );
}

export default App;

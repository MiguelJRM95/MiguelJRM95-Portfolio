import "./App.css";
import ExpandableCell from "./components/cell/ExpandableCell";

function App() {
  return (
    <main
      id="layout"
      className="l:px-10 l:grid-rows-[1fr_1fr_auto] bg-backgound/90 grid h-screen place-items-center gap-3 px-3 py-5 sm:grid-cols-1 sm:px-5 md:grid-cols-2 md:px-10 xl:px-25"
    >
      <section
        id="about-me"
        className="text-primary-text col-start-1 col-end-2 row-span-2 h-full w-full p-3 text-2xl font-bold"
      >
        About Me
      </section>
      <ExpandableCell
        id="portfolio"
        meta-expandable="true"
        className="text-primary-text bg-accent/80 h-full w-full rounded-3xl p-3 text-2xl font-bold"
      >
        Portfolio
      </ExpandableCell>
      <ExpandableCell
        id="resume"
        meta-expandable="true"
        className="text-primary-text bg-accent/80 h-full w-full rounded-3xl p-3 text-2xl font-bold"
      >
        Resume
      </ExpandableCell>
      <section
        id="skills"
        className="text-primary-text l:h-70 bg-accent/80 h-full w-full rounded-3xl p-3 text-2xl font-bold sm:col-start-1 md:col-start-1 md:col-end-2 md:row-start-3"
      >
        Skills
      </section>
      <section
        id="contact"
        className="text-primary-text bg-accent/80 h-70 w-full rounded-3xl p-3 text-2xl font-bold sm:col-start-1 md:col-start-2 md:row-start-3"
      >
        Contact
      </section>
    </main>
  );
}

export default App;

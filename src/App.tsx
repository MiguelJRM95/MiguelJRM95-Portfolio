import "./App.css";

function App() {
  return (
    <main
      id="layout"
      className="l:px-10 l:grid-rows-[1fr_1fr_auto] grid h-screen place-items-center gap-3 px-3 py-5 sm:grid-cols-1 sm:px-5 md:grid-cols-2 md:px-10 xl:px-25"
    >
      <section
        id="about-me"
        className="col-start-1 col-end-2 row-span-2 h-full w-full border-2 border-amber-950"
      >
        About Me
      </section>
      <section
        id="portfolio"
        meta-expandable="true"
        className="h-full w-full border-2 border-amber-950"
      >
        Portfolio
      </section>
      <section
        id="resume"
        meta-expandable="true"
        className="h-full w-full border-2 border-amber-950"
      >
        Resume
      </section>
      <section
        id="skills"
        className="l:h-50 h-full w-full border-2 border-amber-950 sm:col-start-1 md:col-start-1 md:col-end-2 md:row-start-3"
      >
        Skills
      </section>
      <section
        id="contact"
        className="l:h-50 h-full w-full border-2 border-amber-950 sm:col-start-1 md:col-start-2 md:row-start-3"
      >
        Contact
      </section>
    </main>
  );
}

export default App;

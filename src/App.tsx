import "./App.css";

function App() {
  return (
    <main
      id="layout"
      className="grid h-screen grid-cols-3 grid-rows-2 place-items-center gap-3"
    >
      <section id="about-me" className="h-36 w-40 border-2 border-amber-950">
        About Me
      </section>
      <section
        id="portfolio"
        meta-expandable="true"
        className="h-36 w-40 border-2 border-amber-950"
      >
        Portfolio
      </section>
      <section
        id="resume"
        meta-expandable="true"
        className="h-36 w-40 border-2 border-amber-950"
      >
        Resume
      </section>
      <section id="skills" className="h-20 w-40 border-2 border-amber-950">
        Skills
      </section>
      <section id="contact" className="h-20 w-40 border-2 border-amber-950">
        Contact
      </section>
    </main>
  );
}

export default App;

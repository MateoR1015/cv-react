import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import cvData from "./data/cvData";

function App() {
  return (
    <div className="app">
      <Header personal={cvData.personal} />
      <main className="content">
        <About personal={cvData.personal} />
        <Skills skills={cvData.skills} />
        <Education education={cvData.education} />
        <Experience experiences={cvData.experiences} />
        <Contact contact={cvData.personal} />
      </main>
      <Footer name={cvData.personal.name} />
    </div>
  );
}

export default App;

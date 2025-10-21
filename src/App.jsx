import "./App.css";
// Components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import ProjectTitle from "./components/ProjectTitle";
import ProjectCard from "./components/ProjectCard";
import Aboutme from "./components/Aboutme";
import ContactText from "./components/ContactText";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MovingLogos from "./components/MovingLogos";
import MoreProjects from "./components/MoreProjects";
// Images
import cardBachelor from "./assets/bacheloroppgave.png";
import cardPortofolio from "./assets/portofolio.png";
import cardSudoku from "./assets/Sudoku.png";
import SkillsIcon from "./components/SkillsIcons";

const dwnlBcl = "link goes here";

const cardText = [
  `Bacheloroppgaven min undersøkte hvordan blokkjede-teknologi kan brukes til å utstede og verifisere utdanningsvitnemål på en sikker og effektiv måte. Prosjektet kombinerte teoretisk forskning med et praktisk proof-of-concept utivklet i et smartkontraktspråket Daml.`,
  "Dette prosjektet er nettsiden du befinner deg på. En demonstrasjon av mine ferdigheter innen moderne webutvikling. Nettsiden er bygget med React og JavaScript, og inneholder dynamiske komponenter, responsivt design og optimalisert bilde- og innholdsstruktur. Den er hostet med Vercel. Layout og design er laget i Figma, med fokus på klar visuell profil og brukervennlighet.",
  "Et interaktivt Sudoku-spill bygget i Vanilla JavaScript med dynamisk generering av brett og en backtracking-algoritme for å sikre gyldige løsninger. Fokuset var på å utvikle noe helt på egenhånd uten hjelpemidler og se om jeg klarte å implementere logikken som inngår i et spill Sudoku. Samt bruke CSS for å lage et minimalistisk design. Her lærte jeg JavaScript, logikkimplementasjon, og DOM-manipulasjon.",
  "FilmQuest er en komplett fullstack-applikasjon for filmelskere, bygget i React med autentisering, API-integrasjon og interaktiv datavisualisering. Brukere kan søke etter filmer via OMDB, filtrere på sjanger, legge til i egen watchlist og markere favoritter. Løsningen inkluderer “Guest Mode” for rask demo, samt responsive visninger optimalisert for mobil. Med Chart.js genereres statistikk over seervaner, som mest sette sjangre, årstall og regissører. Backend håndteres av Firebase eller Supabase for sikker innlogging og lagring. FilmQuest demonstrerer evnen til å utvikle en moderne, datadrevet webapplikasjon fra idé til produksjon – med fokus på brukervennlighet, design og teknisk presisjon.",
];

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Video /> */}
      <ProjectTitle title="Prosjekter" />
      <div id="project-cards">
        <ProjectCard
          title="Bacheloroppgave"
          image={cardBachelor}
          text={cardText[0]}
        />
        <ProjectCard
          title={"Portofølje i React"}
          image2={cardPortofolio}
          text={cardText[1]}
        />
        <ProjectCard
          title="Sudoku med JS"
          image={cardSudoku}
          text={cardText[2]}
        />
        <Aboutme />
      </div>
      <MovingLogos />
      <div id="contact-section">
        <ContactText />
        <ContactForm />
      </div>
      <h3 id="jokequote">No bugs were harmed in the making of this site.</h3>
      <Footer></Footer>
    </>
  );
}

export default App;

import "./SkillsIcon.css";

import iconAe from "../assets/icons/icon-ae.png";
import iconCss from "../assets/icons/icon-css.svg";
import iconFigma from "../assets/icons/icon-figma.png";
import iconGithub from "../assets/icons/icon-github.svg";
import iconHtml from "../assets/icons/icon-html.png";
import iconJavascript from "../assets/icons/icon-javascript.png";
import iconPhotoshop from "../assets/icons/icon-photoshop.png";
import iconPostgres from "../assets/icons/icon-postgresql.png";
import iconPp from "../assets/icons/icon-pp.png";
import iconPython from "../assets/icons/icon-python.jpeg";
import iconReact from "../assets/icons/icon-react.png";
import iconSap from "../assets/icons/icon-sap.png";
import iconTs from "../assets/icons/icon-typescript.png";
import iconVite from "../assets/icons/icon-vite.png";

function SkillsIcon() {
  return (
    <div className="skills">
      <img src={iconHtml} alt="HTML5" />
      <img src={iconCss} alt="CSS3" />
      <img src={iconJavascript} alt="JavaScript" />
      <img src={iconPython} alt="Python" />
      <img src={iconReact} alt="React" />
      <img src={iconVite} alt="Vite" />
      <img src={iconPostgres} alt="PostgreSQL" />
      <img src={iconTs} alt="TypeScript" />
      <img src={iconSap} alt="SAP" />
      <img src={iconGithub} alt="GitHub" />
      <img src={iconFigma} alt="Figma" />
      {/* <img src={iconPhotoshop} alt="Adobe Photoshop" />
      <img src={iconAe} alt="Adobe After Effects" />
      <img src={iconPp} alt="Adobe Premiere Pro" /> */}
    </div>
  );
}

export default SkillsIcon;

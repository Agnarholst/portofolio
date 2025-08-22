import "./MovingLogos.css";

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
import white from "../assets/icons/white.jpg";

export default function MovingLogos() {
  return (
    <div className="wrapper">
      <img className="item item1" src={iconHtml} alt="HTML5" />
      <img className="item item2" src={iconCss} alt="CSS3" />
      <img className="item item3" src={iconJavascript} alt="JavaScript" />
      <img className="item item4" src={iconPython} alt="Python" />
      <img className="item item5" src={iconReact} alt="React" />
      <img className="item item6" src={iconVite} alt="Vite" />
      <img className="item item7" src={iconPostgres} alt="PostgreSQL" />
      <img className="item item8" src={iconTs} alt="TypeScript" />
      <img className="item item9" src={iconSap} alt="SAP" />
      <img className="item item10" src={iconGithub} alt="GitHub" />
      <img className="item item11" src={iconFigma} alt="Figma" />
      <img className="item item12" src={iconPhotoshop} alt="Adobe Photoshop" />
      <img className="item item13" src={iconAe} alt="Adobe After Effects" />
      <img className="item item14" src={iconPp} alt="Adobe Premiere Pro" />
      {/* <div className="item item1"></div>
      <div className="item item2"></div>
      <div className="item item3"></div>
      <div className="item item4"></div>
      <div className="item item5"></div>
      <div className="item item6"></div>
      <div className="item item7"></div>
      <div className="item item8"></div> */}
    </div>
  );
}

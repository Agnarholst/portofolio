import "./Hero.css";
import profileImg from "../assets/Profile-pic.jpg";

function Hero() {
  return (
    <div id="container">
      <div>
        <h1 id="mainTitle">Agnar Holst</h1>
        <h2>Frontend Utvikler</h2>
        <div id="heroText">
          <p>
            Jeg trives like godt med piksler som med <b>queries</b>.
          </p>
          <p>
            Kode, design og <b>struktur</b> -
          </p>
          <p>
            alt må henge sammen for å gi <b>mening</b>.
          </p>
        </div>
      </div>
      <div>
        <img src={profileImg} alt="Profilbilde" id="profileImg" />
      </div>
    </div>
  );
}

export default Hero;

import "./ContactText.css";
import ProjectTitle from "./ProjectTitle";

function ContactText() {
  return (
    <div className="contacttext-container">
      <ProjectTitle id="takontakt-tittel" title="Ta kontakt" />
      <h2 id="contacttext-h2">Jeg vil gjerne høre fra deg!</h2>
      <p id="contacttext-p">
        Hvis du har noen som helst <br />
        spørsmål eller ønsker å si hei, <br />
        bruk kontaktskjemaet!
      </p>
    </div>
  );
}

export default ContactText;

import "./MoreProjects.css";
import MoreProjectButtons from "./MoreProjectsButtons";

function MoreProjects() {
  function handleSelect(message) {
    console.log(message);
  }
  return (
    <>
      <div>
        <div>
          <h1>Flere Prosjekter</h1>
        </div>
        <div className="buttons-container">
          <MoreProjectButtons onSelect={() => handleSelect("Prosjekt 1")}>
            Prosjekt 1
          </MoreProjectButtons>
          <MoreProjectButtons onSelect={() => handleSelect("Prosjekt 2")}>
            Prosjekt 2
          </MoreProjectButtons>
          <MoreProjectButtons onSelect={() => handleSelect("Prosjekt 3")}>
            Prosjekt 3
          </MoreProjectButtons>
          <MoreProjectButtons onSelect={() => handleSelect("Prosjekt 4")}>
            Prosjekt 4
          </MoreProjectButtons>
        </div>
      </div>
    </>
  );
}

export default MoreProjects;

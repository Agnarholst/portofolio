import "./ProjectCard.css";
//import cardImg from "../assets/Profile-pic.jpg";

function ProjectCard(props) {
  props.title;
  props.image;
  props.text;
  return (
    <div className="card-container">
      <div className="card">
        <img className="card" src={props.image} alt="what" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

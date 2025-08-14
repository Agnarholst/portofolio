import "./ProjectCard.css";
//import cardImg from "../assets/Profile-pic.jpg";

function ProjectCard(props) {
  props.title;
  props.image;
  props.text;
  props.image2;
  return (
    <div className="card-container">
      {props.image && (
        <div className="card">
          <img className="card" src={props.image} />
        </div>
      )}
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      {props.image2 && (
        <div className="card">
          <img className="card" src={props.image2} />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;

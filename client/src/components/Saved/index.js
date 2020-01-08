import React from "react";
import "./style.css";

function SavedComponent(props) {
  return (
    <div className="resultBox">
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank"><button>View</button></a>
      
      <button onClick={()=> props.handleDelete(props._id)}>Delete</button>
      
      <p>Written By {props.author}</p>
      <img alt={props.title} src={props.img}/>
      <p className="summary">{props.summary}</p>
    </div>
  );
}

export default SavedComponent;

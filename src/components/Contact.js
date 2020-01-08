import React from "react";
import "./Contact.css";

function Contact(props) {
  let online = props.online;

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"} />
          <div className="status-text">{online ? "online" : "offline"}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

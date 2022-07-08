import React from "react";
import avatar from "../images/avatar.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item " style={{ display: "flex" }}>
      <img className="ui avatar image" src={avatar} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>

      <i
        className="trash alternate  icon "
        style={{
          color: "red",
          marginTop: "7px",
          marginLeft: "auto",
        }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;

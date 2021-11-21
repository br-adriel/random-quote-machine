import React from "react";
import "./Quote.css";

const Quote = (props) => {
  return (
    <>
      <p id="text">{props.data.content}</p>
      <p id="author">- {props.data.author}</p>
    </>
  );
};

export default Quote;

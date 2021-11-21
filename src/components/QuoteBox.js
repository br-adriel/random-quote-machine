import React from "react";
import Footer from "./Footer";
import Actions from "./Actions";
import Quote from "./Quote";
import "./QuoteBox.css";

const QuoteBox = (props) => {
  return (
    <>
      <section id="quote-box">
        <Quote />
        <Actions />
      </section>
      <Footer />
    </>
  );
};

export default QuoteBox;

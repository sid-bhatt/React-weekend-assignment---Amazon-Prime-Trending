import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data";

const App = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else setCurrentSlide(0);
  };

  const next = () => {
    currentSlide < props.slides.length && setCurrentSlide(currentSlide + 1);
  };

  const restart = () => {
    setCurrentSlide(0);
  };

  return (
    <>
      <div className="App">
        <div>
          <h1 data-testid="title">{props.slides[currentSlide].title}</h1>
          <p data-testid="text">{props.slides[currentSlide].text}</p>
        </div>
        <button
          data-testid="button-prev"
          disabled={currentSlide === 0 ? true : false}
          onClick={prev}
        >
          Previous
        </button>
        <button
          data-testid="button-restart"
          disabled={currentSlide === props.slides.length - 1 ? true : false}
          onClick={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-next"
          disabled={currentSlide === 0 ? true : false}
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;

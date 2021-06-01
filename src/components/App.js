// import React, { Component, useState } from "react";
// import "../styles/App.css";

// const App = (props) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prev = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     } else setCurrentSlide(0);
//   };

//   const next = () => {
//     currentSlide < props.slides.length - 1 && setCurrentSlide(currentSlide + 1);
//   };

//   const restart = () => {
//     setCurrentSlide(0);
//   };

//   return (
//     <>
//       <div className="App">
//         <div>
//           <h1 data-testid="title">{props.slides[currentSlide].title}</h1>
//           <p data-testid="text">{props.slides[currentSlide].text}</p>
//         </div>
//         <button
//           data-testid="button-prev"
//           disabled={currentSlide === 0 ? true : false}
//           onClick={prev}
//         >
//           Previous
//         </button>
//         <button
//           data-testid="button-restart"
//           disabled={currentSlide === props.slides.length-1 ? true : false}
//           onClick={restart}
//         >
//           Restart
//         </button>
//         <button
//           data-testid="button-next"
//           disabled={currentSlide === 0 ? true : false}
//           onClick={next}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";

import "../styles/App.css";

const App = (props) => {
  console.log(props.slides);

  const [currSlides, setCurrSlides] = useState(0);

  const clickPrev = () => {
    currSlides > 0 && setCurrSlides(currSlides - 1);
  };

  const clickNext = () => {
    currSlides < props.slides.length - 1 && setCurrSlides(currSlides + 1);
  };

  const clickRestart = () => {
    setCurrSlides(0);
  };

  return (
    <div className="App">
      <div className="carousel">
        <h1 data-testid="title">{props.slides[currSlides].title}</h1>

        <p data-testid="text">{props.slides[currSlides].text}</p>
      </div>

      <button
        onClick={clickPrev}
        disabled={currSlides === 0 ? true : false}
        data-testid="button-prev"
      >
        Prev
      </button>

      <button
        onClick={clickNext}
        disabled={currSlides === props.slides.length - 1 ? true : false}
        data-testid="button-next"
      >
        Next
      </button>

      <button
        onClick={clickRestart}
        disabled={currSlides === 0 ? true : false}
        data-testid="button-restart"
      >
        Restart
      </button>
    </div>
  );
};

export default App;

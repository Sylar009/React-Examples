import React from "react";
// import {useState} from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor : 'white',
  // });

  // const [buttonText, setButtonText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //     if (myStyle.color === 'white') {
  //         setMyStyle ({
  //             color: 'black',
  //             backgroundColor : 'white',
  //             border : "1 px solid white",
  //         });
  //         setButtonText("Enable Dark Mode");
  //     } else {
  //         setMyStyle ({
  //             color: 'white',
  //             backgroundColor : 'black',
  //         });
  //         setButtonText("Enable Light Mode");
  //     }
  // }

  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div
      className="Container mx-3 my-3"
      style={myStyle}
    >
      <h1 className="mx-3 my-3"> About Textulits </h1>
      <div
        className="accordion mx-3 my-3"
        id="accordionExample"
        style={myStyle}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            style={myStyle}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {buttonText}
        </button>
      </div> */}
    </div>
  );
}

import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase Button Clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Coverted To Upper Case", "success");
  };
  const handleLowClick = () => {
    console.log("Lowercase Button Clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Coverted To Lower Case", "success");
  };
  const handleClearClick = () => {
    console.log("Clear Button Clicked!" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text successfully cleared.", "success");
  };
  const handleCopyClick = () => {
    console.log("Copy Button Clicked!" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard Successfully.", "success");
  };
  const handleExtraSpaceClick = () => {
    console.log("Extra Scape Button Clicked!" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space Successfully.", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  };
  const handleSpeakChange = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
        props.showAlert("Speaking Started...", "success");
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
            props.showAlert("Speaking Stopped", "success");
        }
    }
  }
  const [text, setText] = useState("");
  return (
    // <form id="textForm">
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textbox"
          rows="8"
          value={text}
          style={{backgroundColor : props.mode === 'dark' ? '#212529' : 'white', 
          color : props.mode === 'dark' ? 'white' : 'black'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-dark mx-2" onClick={handleUpClick} type="button" >
        Convert To Uppercase
      </button>
      <button className="btn btn-dark mx-2" onClick={handleLowClick} type="button" >
        Convert To Lowercase
      </button>
      <button className="btn btn-dark mx-2" onClick={handleClearClick} type="button" >
        Clear Text
      </button>
      <button className="btn btn-dark mx-2" onClick={handleSpeakChange} id="toggle" type="button" >
        Speak
      </button>
      <button className="btn btn-dark mx-2" onClick={handleCopyClick} id="toggle" type="button" >
        Copy
      </button>
      <button className="btn btn-dark mx-2" onClick={handleExtraSpaceClick} id="toggle" type="button" >
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1> Your Text Summary </h1>
        <p> {text.split(" ").length} words and {text.length} characters. </p>
        <p> {0.008 * text.split(" ").length} Minutes to read. </p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Enter Something in the textarea to preview it here."} </p>
    </div>
    </>
    // </form>
  );
}

// TextForm.propTypes = {
//   heading: PropTypes.string.isRequired,
// };

// TextForm.defaultProps = {
//   heading: "Enter your Text here",
// };

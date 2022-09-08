import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>Enter Your Text Here</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Your Text"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-dark mt-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-dark mt-2 mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-dark mt-2 mx-1" onClick={handleClearClick}>
            Clear
          </button>
        </div>
        <div className="container">
          <h3>Your text summary</h3>
          {/* text.replace(/\n/g, " ").split(' ').filter(value => value != "").length */}
          <p>{text.split(" ").length} words and {text.trim().length} characters</p>
          <p>{0.008 * text.trim().length} minutes to read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

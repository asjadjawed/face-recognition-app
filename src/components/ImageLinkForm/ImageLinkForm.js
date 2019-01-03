import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => (
  <div className="ImageLinkForm">
    <p>Face-Detect Eye v.0.1a</p>
    <div className="imageInput">
      <input type="text" placeholder="image url" onChange={onInputChange} />
      <button onClick={onImageSubmit}>Detect</button>
    </div>
  </div>
);

export default ImageLinkForm;

import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => (
  <div className="ImageLinkForm">
    <p>Face-Detect Eye v.0.1a</p>
    <div className="imageInput">
      <input type="text" placeholder="image url" />
      <button>Detect</button>
    </div>
  </div>
);

export default ImageLinkForm;

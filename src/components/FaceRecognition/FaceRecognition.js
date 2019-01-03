import React from "react";

const FaceRecognition = ({ image, boxes }) => {
  let faceBoxes = [];

  if (boxes.length) {
    faceBoxes = boxes.map((box, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          border: "5px solid #ec173a",
          top: `${box.top_row * 100}%`,
          bottom: `${(1 - box.bottom_row) * 100}%`,
          left: `${box.left_col * 100}%`,
          right: `${(1 - box.right_col) * 100}%`
        }}
      />
    ));
  }

  return (
    <div
      className="FaceRecognition"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "80%"
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            boxShadow: "0px 0px 41px 3px rgba(0, 0, 0, 0.23)"
          }}
        />
        {faceBoxes}
      </div>
    </div>
  );
};

export default FaceRecognition;

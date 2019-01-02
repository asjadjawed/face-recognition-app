import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "4a1dcea0b8ee4974b20ffefea7bed5cd"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      boxes: []
    };
  }

  onInputChange = e => this.setState({ input: e.target.value, boxes: [] });

  onSubmit = () => {
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(res => {
        if (res.outputs[0].data.regions) {
          this.setState({
            boxes: res.outputs[0].data.regions.map(
              box => box.region_info.bounding_box
            )
          });
        }
      })
      .catch(err => console.error("Bad Request!", err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={particlesConfig} />
        <Navigation />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <Rank />
        <FaceRecognition image={this.state.input} boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;

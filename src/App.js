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
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
  apiKey: "4a1dcea0b8ee4974b20ffefea7bed5cd"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      boxes: [],
      route: "signIn"
    };
  }

  onInputChange = e => this.setState({ input: e.target.value, boxes: [] });

  onRouteChange = route => this.setState({ route: route });

  onImageSubmit = () => {
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
        {this.state.route === "register" ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : this.state.route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div className="home">
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onImageSubmit={this.onImageSubmit}
            />
            <Rank />
            <FaceRecognition
              image={this.state.input}
              boxes={this.state.boxes}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;

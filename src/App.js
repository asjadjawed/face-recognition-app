import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      boxes: [],
      route: "signIn",
      user: {}
    };
    this.loadUser = this.loadUser.bind(this);
    this.initState = this.initState.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onImageSubmit = this.onImageSubmit.bind(this);
  }

  loadUser(data) {
    this.setState({ user: data });
  }

  initState() {
    this.setState({
      input: "",
      boxes: [],
      route: "signIn",
      user: {}
    });
  }

  onInputChange(e) {
    this.setState({ input: e.target.value, boxes: [] });
  }

  onRouteChange(route) {
    this.setState({ route: route });
  }

  onImageSubmit() {
    fetch("http://localhost:5000/image", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.user.id,
        input: this.state.input
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          this.setState({ boxes: data.boxes, user: data.user });
        } else {
          throw new Error("Face not found");
        }
      })
      .catch(error => console.error("Bad Request!", error));
  }

  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={particlesConfig} />
        {this.state.route === "register" ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : this.state.route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <div className="home">
            <Navigation initState={this.initState} />
            <Logo />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onImageSubmit={this.onImageSubmit}
            />
            <Rank
              userName={this.state.user.name}
              userEntries={this.state.user.entries}
            />
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

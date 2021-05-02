import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

// Add Assets

// Add CSS
import "./App.css";

// Add Components
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";
import GetApp from "./Components/GetApp";
import OtherVersion from "./Components/OtherVersion";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/ScrollButton";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className="header">
          <Header />
        </div>
        <div className="get-app">
          <GetApp />
        </div>
        <div className="other-version">
          <OtherVersion />
        </div>
        <div className="footer">
          <Footer />
        </div>
        <div className="go-to-top">
          <ScrollButton scrollStepInPx={"40"} delayInMs={"16.66"} />
        </div>
      </>
    );
  }
}

export default App;

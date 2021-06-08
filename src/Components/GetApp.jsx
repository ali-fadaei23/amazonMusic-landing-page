import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import "./GetApp.css";

// Add Assets
import IconApp from "../Assets/icon-app.png";
import PlayStore from "../Assets/icon-play-store.svg";
import AppStore from "../Assets/icon-app-store.svg";
import Phone1 from "../Assets/download-app-phone.png";
import Phone2 from "../Assets/download-app.png";
import Shape from "../Assets/shape.png";

const GetApp = (props) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showElement, setshowElement] = useState(false);

  useEffect(() => {
    const ShowHide = function () {
      if (window.innerWidth < 700) {
        setshowElement(true);
      } else {
        setshowElement(false);
      }
    };

    window.addEventListener("resize", ShowHide);
    return () => {
      window.removeEventListener("resize", ShowHide);
    };
  }, []);

  useEffect(() => {
    const ShowAnimationStart = function () {
      if (window.pageYOffset >= 380) {
        setShowAnimation(true);
      }
    };
    window.addEventListener("scroll", ShowAnimationStart);
    return () => window.removeEventListener("scroll", ShowAnimationStart);
  }, []);

  return (
    <Container className="get-app-container" id="download-app-container">
      <Row>
        <Col className="col-get-app">
          <div className="box-text">
            <h1
              className="text"
              style={
                showAnimation
                  ? {
                      visibility: "visible",
                      animation: "text 900ms",
                    }
                  : { visibility: "hidden" }
              }
            >
              Available for your
              {showElement ? null : <br></br>} smartphone.
            </h1>
          </div>
          <div className="box-get-app">
            <div
              className="icon-app"
              style={
                showAnimation
                  ? { visibility: "visible", animation: "icon-app 1000ms" }
                  : { visibility: "hidden" }
              }
            >
              <img src={IconApp} width="110" />
              <span style={{ width: "400px", marginTop: "25px" }}>
                Amazon Music is a music streaming platform and online music
                store operated by Amazon
              </span>
            </div>
            <div
              className="btn-get-app"
              style={
                showAnimation
                  ? { visibility: "visible", animation: "get-app 1900ms" }
                  : { visibility: "hidden" }
              }
            >
              <div>
                <a href="#" className="play-store-d">
                  <img
                    src={PlayStore}
                    width="40"
                    className="img-btn-play-store"
                    style={{ padding: "8px" }}
                  />

                  <span style={{ padding: "6px" }}>Google Play</span>
                </a>
              </div>
              <div>
                <a href="#" className="app-store-d">
                  <img
                    src={AppStore}
                    width="40"
                    className="img-btn-apple-store"
                  />
                  <span style={{ padding: "6px" }}>App Store</span>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="box-phone">
            <div
              className="phone-1"
              style={
                showAnimation
                  ? { visibility: "visible", animation: "phone-1 1700ms" }
                  : { visibility: "hidden" }
              }
            >
              <img className="img-phone-1" src={Phone1} />
            </div>
            <div
              className="phone-2"
              style={
                showAnimation
                  ? { visibility: "visible", animation: "phone-2 2500ms" }
                  : { visibility: "hidden" }
              }
            >
              <img className="img-phone-2" src={Phone2} />
            </div>
            <div
              className="shape"
              style={
                showAnimation
                  ? { visibility: "visible", animation: "shape 1100ms" }
                  : { visibility: "hidden" }
              }
            >
              <img className="img-shape" src={Shape} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetApp;

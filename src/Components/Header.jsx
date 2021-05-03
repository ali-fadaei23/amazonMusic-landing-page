import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

// Add Assets
import LogoPrime from "../Assets/amazon-prime-logo.png";

const Header = (props) => {
const [hideElement, setHideElement] = useState(false);

  useEffect(() => {
    const HideElement = function () {
      if (window.innerWidth < 700) {
        setHideElement(true);
      } else {
        setHideElement(false);
      }
    };

    window.addEventListener("resize", HideElement);
    return () => {
      window.removeEventListener("resize", HideElement);
    };
  }, []);

  return (
    <Container className="header-container">
      <Row>
        <Col>
          <div className="box-content">
            <img src={LogoPrime} width="300" />
          </div>

          <div className="box-text-1">
            <h1 className="text-1" style={{ animation: "box-text-1 1800ms" }}>
              Amazon Music: Stream and Discover Songs & Podcasts
            </h1>
          </div>
          <div className="box-text-2">
            <span className="text-2" style={{ animation: "box-text-2 2300ms" }}>
              We’re changing the way you find and play the music and podcasts
              you love.
            </span>
          </div>
        </Col>
        <Col
          style={hideElement ? { display: "none" } : { display: "block" }}
        ></Col>
      </Row>
    </Container>
  );
};

export default Header;

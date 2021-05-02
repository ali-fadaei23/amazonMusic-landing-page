import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

// Add Assets
import Logo from "../Assets/amazon-music.png";
import MoreIcon from "../Assets/more.png";

const NavigationBar = (props) => {
  const [navFix, setNavFix] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const MoreBtn = function () {
    if (!showNav) {
      setShowNav(true);
    } else if (showNav) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    const Reset = function () {
      if (window.innerWidth > 700) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", Reset);
    return () => {
      window.removeEventListener("resize", Reset);
    };
  }, []);

  useEffect(() => {
    const stickyNav = function () {
      if (window.pageYOffset > 90) {
        setNavFix(true);
      } else {
        setNavFix(false);
      }
    };

    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <div>
      <Container
        className="navbar-container"
        style={
          navFix
            ? {
                position: "fixed",
                backgroundColor: "#3B1045",
                zIndex: "1",
                animation: "animation-nav 0.4s",
              }
            : {
                position: "absolute",
                zIndex: "1",
              }
        }
      >
        <Row>
          <Col className={showNav ? "col-nav display-col-nav" : "col-nav"}>
            <Navbar>
              <Navbar.Brand href="#home">
                <div className="box-logo">
                  <img
                    src={Logo}
                    width="175"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </div>
              </Navbar.Brand>
            </Navbar>

            <div
              className={
                showNav ? "box-btns-nav " : "box-btn-nav align-btns-nav"
              }
            >
              <button
                className={showNav ? "btn-more" : "btn-more show-btn-more"}
                onClick={MoreBtn}
              >
                <img src={MoreIcon} className="img-more" />
              </button>
              <div
                className={
                  showNav ? "box-btn-home" : "box-btn-home hide-btn-home"
                }
              >
                <Navbar.Brand href="#home">
                  <div className="box-home">
                    <span>Home</span>
                  </div>
                </Navbar.Brand>
              </div>
              <div
                className={
                  showNav
                    ? "box-btn-download"
                    : "box-btn-download hide-btn-download"
                }
              >
                <Navbar.Brand href="#download-app-container">
                  <div className="box-download-app">
                    <span>Download</span>
                  </div>
                </Navbar.Brand>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;

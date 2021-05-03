import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

// Add Assets
import InstagramIcon from "../Assets/instagram.png";
import WhatsAppIcon from "../Assets/whats-app.png";
import YoutubeIcon from "../Assets/youtube.png";
import LinkedinIcon from "../Assets/linkedin.png";
import TwitterIcon from "../Assets/twitter.png";

const Footer = (props) => {
  return (
    <Container className="footer-container">
      <div
        style={{
          marginBottom: "20px",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        <Row style={{ margin: "auto" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="box-text-download">
              <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Pages</h1>
            </div>
            <div className="box-download">
              <div className="box-footer-link">
                <ul className="ul-footer">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <div className="box-footer">
            <div className="box-social-media ">
              <div className="instagram margin-element ">
                <a href="#">
                  <img src={InstagramIcon} width="100" className="animation" />
                </a>
              </div>
              <div className="linkedin margin-element">
                <a href="#">
                  <img src={LinkedinIcon} width="100" className="animation" />
                </a>
              </div>
              <div className="youtube margin-element">
                <a href="#">
                  <img src={YoutubeIcon} width="100" className="animation" />
                </a>
              </div>
              <div className="whats-app margin-element">
                <a href="#">
                  <img src={WhatsAppIcon} width="100" className="animation" />
                </a>
              </div>
              <div className="twitter margin-element ">
                <a href="#">
                  <img src={TwitterIcon} width="100" className="animation" />
                </a>
              </div>
              <div />
            </div>
          </div>
          <div className="design-by">
            <span className="text-design-by">
              Copyright © 2021 Amazon Music, Inc.
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

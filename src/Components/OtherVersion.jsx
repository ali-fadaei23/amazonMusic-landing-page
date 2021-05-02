import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OtherVersion.css";

// Add Assets
import PrimeLogo from "../Assets/amazon-music-prime.png";
import FreeLogo from "../Assets/amazon-music-free.png";
import HDLogo from "../Assets/amazon-music-hd.png";

const OtherVersion = (props) => {
  return (
    <Container className="other-version-container">
      <Row>
        <Col>
          <div className="box-v-prime">
            <div className="img-prime padding-other-version">
              <img src={PrimeLogo} width="270" />
            </div>
            <div className="text-prime">
              <span>Unlimited Skips And Offline Listening</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="box-v-free">
            <div className="img-free padding-other-version">
              <img src={FreeLogo} width="270" />
            </div>
            <div className="text-free">
              <span>Play Music, Free</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="box-v-hd">
            <div className="img-hd padding-other-version">
              <img src={HDLogo} width="270" />
            </div>
            <div className="text-hd">
              <span>Exclusive Ultra HD Remastered Albums</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OtherVersion;

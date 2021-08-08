import React, { useEffect, useRef, useState } from "react";
import "./ScrollButton.css";

// add Assets
import BackToTop from "../Assets/back-top.png";

const ScrollButton = (props) => {
  const intervalId = useRef(0);
  const [visible, setVisible] = useState(false);

  function scrollStep() {
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    if (window.pageYOffset === 0) {
      clearInterval(intervalId.current);
    }
  }

  useEffect(() => {
    const showBackTop = function () {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        setVisible(true);
      } else if (window.pageYOffset === 0) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", showBackTop);
    return () => window.removeEventListener("scroll", showBackTop);
  }, []);

  function scrollToTop() {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(scrollStep, props.delayInMs);
  }

  return (
    <button
      className="btn-go-to-top"
      onClick={scrollToTop}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <img src={BackToTop} width="90" style={{width: "5em"}} />
    </button>
  );
};

export default ScrollButton;

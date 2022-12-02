import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { TfiAngleDoubleUp } from "react-icons/tfi";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollButton && (
        <TfiAngleDoubleUp className="scroll-top" onClick={scrollTop} />
      )}
    </div>
  );
};

export default ScrollToTop;

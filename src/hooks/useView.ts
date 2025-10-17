"use client";
import { useState, useEffect } from "react";

const useView = () => {
  const [device, setDevice] = useState({
    isXSM: false,
    isESM: false,
    isSM: false,
    isMD: false,
    isLG: false,
    isXL: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;

        setDevice({
          isXSM: width <= 325,
          isESM: width > 325 && width <= 425,
          isSM: width > 425 && width <= 640,
          isMD: width > 640 && width <= 768,
          isLG: width > 768 && width <= 1024,
          isXL: width > 1024,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return device;
};

export default useView;

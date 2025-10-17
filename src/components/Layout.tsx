"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import GlobalBackground from "./GlobalBackground";

interface PropTypes {
  children: ReactNode;
}

const AppLayout = ({ children }: PropTypes) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <GlobalBackground />
      <Navbar />
      <br />
      <div style={{ marginTop: 15 }}>{children}</div>
    </>
  );
};

export default AppLayout;

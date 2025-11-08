"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import GlobalBackground from "./GlobalBackground";
import Footer from "./Footer";

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

      <div style={{ marginTop: 30 }}>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;

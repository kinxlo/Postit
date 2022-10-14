import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface iProps {
  children: ReactNode;
}

const layout = ({ children }: iProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;

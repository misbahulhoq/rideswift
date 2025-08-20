import React from "react";
import { Navbar } from "./shared/Navbar";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Provider;

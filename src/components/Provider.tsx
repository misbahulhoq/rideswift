import React from "react";
import { Navbar } from "./shared/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Footer } from "./shared/Footer";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Provider;

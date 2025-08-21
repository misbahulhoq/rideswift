import React from "react";
import { Navbar } from "./shared/Navbar";
import { ThemeProvider } from "./ThemeProvider";

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
    </ThemeProvider>
  );
};

export default Provider;

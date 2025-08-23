"use client";
import React from "react";
import { Navbar } from "./shared/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Footer } from "./shared/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;

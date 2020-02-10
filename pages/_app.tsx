import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import { MinskyTheme } from "../types/themes";

const theme: MinskyTheme = {
  colors: {
    primary: "#ffdf53"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

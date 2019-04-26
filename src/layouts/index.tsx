import * as React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from "src/theme";
import { StateProvider } from "src/context/StateContext";

import { Normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  * {
    marign: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const BaseLayout: React.SFC<{}> = ({ children }) => {
  return (
    <StateProvider>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <GlobalStyle />
          <Normalize />
          <div>{children}</div>
        </div>
      </ThemeProvider>
    </StateProvider>
  );
};

export default BaseLayout;

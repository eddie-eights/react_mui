import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";

import MuiButton from "../components/MuiButton";
import MuiSignIn from "../components/MuiSignIn";

const MuiThemeTest = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });
  return (
    <>
      {/* <MuiButton /> */}
      {/* <MuiSignIn /> */}
      <Button color="primary" variant="contained">
        デフォルトボタン
      </Button>
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          Theme ボタン
        </Button>
      </ThemeProvider>
    </>
  );
};

export default MuiThemeTest;

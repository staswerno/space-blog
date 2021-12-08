import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "./MuiStyle";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ErrorRoute from "./ErrorRoute";

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="live_stuff" element={<Tabs />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <Typography>
                    Please select a LiveFeed from the Tabs
                  </Typography>
                </main>
              }
            />
            <Route path="feed_:value" element={<Tab />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

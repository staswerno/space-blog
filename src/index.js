import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>,

	document.getElementById("root")
);

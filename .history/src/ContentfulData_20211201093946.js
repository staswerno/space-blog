import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { client } from "./client";

export default class ContentfulDataComp extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Box m={2}>
          <Paper>
            <Typography>Contentful Data Here!</Typography>
          </Paper>
        </Box>
      </>
    );
  }
}

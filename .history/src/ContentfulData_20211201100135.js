import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { client } from "./client";
import { marked } from "marked";

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
            <Typography>
              <Posts posts={this.state.articles} />
            </Typography>
          </Paper>
        </Box>
      </>
    );
  }
}

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

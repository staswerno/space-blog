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
const Post = ({ article }) => {
  console.log(article);
  const { title, visit, image, description } = article.fields;
  const postDescription = marked(description);
  return (
    <div>
      <h2>{title}</h2>
      <p>{visit}</p>
      {image && <img src={image.fields.file.url} alt={title} title={title} />}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

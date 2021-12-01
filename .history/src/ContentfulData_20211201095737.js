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
            <Typography>Contentful Data Here!</Typography>
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
    <div className="post">
      <h2 className="title">{name}</h2>
      <p>{visit}</p>
      {images && (
        <img
          className="images"
          src={images.fields.file.url}
          alt={name}
          title={name}
        />
      )}
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

import React from "react";
import { Button, Paper, Box, Typography, Card, Link, CardContent, CardMedia } from '@mui/material'; 
import { marked } from "marked";
import "./post.css";

const Post = ({ article }) => {
  console.log(article);
  const { title, visit, link, image, description } = article.fields;
  const postDescription = marked(description);
  return (
    <Box m={2} >
      <Card >
      <CardMedia
        component="img"
        height="200"
        image={image.fields.file.url}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {visit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <section
        dangerouslySetInnerHTML={{ __html: postDescription }}
      ></section>
        </Typography>
        <Button variant="outlined" href={link} alt={title} component={Link}>READ MORE</Button>

      </CardContent>
  
    </Card>
    </Box>
  );
};
export default Post;

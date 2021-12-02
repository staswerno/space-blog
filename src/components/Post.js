import React from "react";
import { Button, Box, Typography, Card, Link, CardContent, CardMedia, Fade } from '@mui/material'; 
import { marked } from "marked";

const Post = ({ article, index }) => {
  const { title, visit, link, image, description } = article.fields;

  const timeDelay = (parseInt(`${index}700`));

  const postDescription = marked(description);
  return (
    <Box m={2} >
      <Fade in={true} timeout={timeDelay}>
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
        <Button variant="outlined" href={link} alt={title} component={Link}
                sx={{ ':hover': {
                                bgcolor: 'primary.main', 
                                color: 'white',
                                } 
                    }}
        >READ MORE</Button>

      </CardContent>
  
    </Card>
    </Fade>
    </Box>
  );
};
export default Post;

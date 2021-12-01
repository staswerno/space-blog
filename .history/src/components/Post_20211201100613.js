import React from "react";
import { marked } from "marked";
import "../App.css";

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
export default Post;

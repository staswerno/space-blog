import React from "react";
import { marked } from "marked";
import "./post.css";

const Post = ({ article }) => {
  console.log(article);
  const { title, visit, link, image, description } = article.fields;
  const postDescription = marked(description);
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{visit}</p>
      {image && <img src={image.fields.file.url} alt={title} title={title} />}

      <section dangerouslySetInnerHTML={{ __html: postDescription }}>
        {
          <a href={link} alt={title}>
            <button>Read more</button>
          </a>
        }
      </section>
    </div>
  );
};
export default Post;

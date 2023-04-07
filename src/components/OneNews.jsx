import React from 'react';
import { useInView } from 'react-intersection-observer';


function OneNews({headline, image, summary, url }) {
   
  return (
    <div className="article">
      <img className="imageNwes" src={image} alt={headline} />
      <div>
      <h2 className="nameArticle" >{headline}</h2>
      <p className="textArticle" >{summary}</p>
      </div>
      <a className="readMore" href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

export default OneNews;
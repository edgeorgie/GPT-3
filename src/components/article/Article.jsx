import React from 'react'
import './Styles.scss'

export const Article = ({ imgBlog, date, title, more }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
        <img src={imgBlog} alt="imgBlog" />
      </div>
      <div className="gpt3__article-content-info">
        <div className="gpt3__article-date">
          <span>{date}</span>
        </div>
        <div className="gpt3__article-title">
          <h3>{title}</h3>
        </div>
        <div className="gpt3__article-more">
          <a href="#">{more}</a>
        </div>
      </div>
    </div>
  );
}

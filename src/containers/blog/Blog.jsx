import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import './Styles.scss'

export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog__title">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="gpt3__blog__content">
        <div className="gpt3__blog__contentA">
          <Article
            imgBlog={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            more="Read Full Article"
          />
        </div>
        <div className="gpt3__blog__contentB">
          <Article
            imgBlog={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            more="Read Full Article"
          />
          <Article
            imgBlog={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            more="Read Full Article"
          />
          <Article
            imgBlog={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            more="Read Full Article"
          />
          <Article
            imgBlog={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            more="Read Full Article"
          />
        </div>
      </div>
    </div>
  );
}

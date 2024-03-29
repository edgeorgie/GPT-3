import React from 'react'
import People from '../../assets/people.png'
import AI from "../../assets/ai.png";
import './Styles.scss'

export const Header = () => {
  return (
    <main className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={People} alt="People" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={AI} alt="AI" />
      </div>
    </main>
  );
}

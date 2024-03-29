import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './Styles.scss'

export const Possibility = () => {
  return (
    <section className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-text">
        <h4>Request Early Access to Get Started</h4>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </section>
  );
}

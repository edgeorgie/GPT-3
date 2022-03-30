import React from 'react'
import { Google, Slack, Atlassian, Dropbox, Shopify } from './imports'
import './Styles.scss'

export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={Google} alt="Google Logo" />
      </div>
      <div>
        <img src={Slack} alt="Slack Logo" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian Logo" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox Logo" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify Logo" />
      </div>
    </div>
  );
}

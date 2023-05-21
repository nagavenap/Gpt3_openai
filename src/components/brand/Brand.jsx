import React from 'react'
import './brand.css'
import { google,shopify,slack,atlassian,dropbox } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding '>
      <div>
        <img src={google} alt=' google'></img>
      </div>
      <div>
        <img src={shopify} alt=' shopify'></img>
      </div>
      <div>
        <img src={slack} alt=' slack'></img>
      </div>
      <div>
        <img src={atlassian} alt=' atlassian'></img>
      </div>
      <div>
        <img src={dropbox} alt=' dropbox'></img>
      </div>
      brand
    </div>
  )
}

export default Brand

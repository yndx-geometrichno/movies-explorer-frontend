import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'
import { errorMessages } from '../../constants/errorMessages'
import { btnNames } from '../../constants/btnNames'

function PageNotFound() {
  return (
    <div className='notfound'>
      <h2 className='notfound__header'>404</h2>
      <p className='notfound__message'>{errorMessages.pageNotFoundError}</p>
      <Link to="/" className='notfound__link'>{btnNames.back}</Link>
    </div>
  )
}

export default PageNotFound
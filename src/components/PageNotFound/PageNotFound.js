import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='notfound'>
      <h2 className='notfound__header'>404</h2>
      <p className='notfound__message'>Страница не найдена</p>
      <Link to="/" className='notfound__link'>Назад</Link>
    </div>
  )
}

export default PageNotFound
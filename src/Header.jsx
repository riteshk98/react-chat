import React from 'react'
import data from './data.json';
import { Link } from 'react-router-dom';
export default function Header() {

  return (
      <div className='header'>
        <Link to="/profile"><img className='header-img' src={data.users.Jhon.profile} alt="Avatar" /></Link>
        <span>{Object.keys(data.users)[0]}</span>
      </div>
  )
}
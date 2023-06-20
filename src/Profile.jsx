import React from 'react'
import data from './data.json';
import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div>
    
    <div className="wrapper">
        <div className="top-icons">
            <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        
        <div className="profile">
            <img src={data.users.Jhon.profile} alt='profile' className="thumbnail" />
            <div className="check"><i className="fas fa-check"></i></div>
            <h3 className="name">Jhon Wick</h3>
            <p className="title">Javascript Developer</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
            <button type="button" className="btn" ><Link to="/">Go Back</Link></button>
        </div>
        
    </div>
    </div>
  )
}

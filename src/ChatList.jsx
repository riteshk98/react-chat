import React from 'react'
import data from './data.json'
import profile from './profile.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { change } from './reducers/chatUser';
import toast, { Toaster } from 'react-hot-toast';
export const ChatList = () => {
    const chatUsersList  = Object.keys(data.users.Jhon.chats);
    const lastMsg = data.users.Jhon.chats;
    const [chatUsers, setchatUsers] = new useState(chatUsersList);
    const dispatch = useDispatch();


    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList = [...chatUsersList];
        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        if(updatedList.length === 0){
          toast.error('No User Found');
        }
        console.log(updatedList);
        setchatUsers(updatedList);
      };
    return (
        <><Toaster />
        <div className='left'>
            <div className="search-form">
              <input id="search-box" onChange={filterBySearch} placeholder='Search' className='search-box' />
            </div>
            <span style={{padding: 12,letterSpacing:2}}>Conversations</span>
            <ol style={{padding:3,margin:8}}>
            {chatUsers.map((item, index) => (
            <li key={index} style={{listStyleType:'none'}}>
              <div className='card' onClick={()=>{dispatch(change({name:item}))}}>
                <img src={profile} alt='profile' className='profile-header'/>
                  <div className="cta__text-column">
                    <h4>{item}</h4>
                    <p>{((lastMsg[item]).slice(-1)[0]?.text)}</p>
                  </div>
              </div>
              </li>
            ))}
        </ol>

        </div>
        </>


    )
}

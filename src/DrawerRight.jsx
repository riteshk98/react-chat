import React, { useState, useRef, useEffect } from "react";
import data from "./data.json";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

export default function DrawerRight() {
  const chatUser = useSelector((state) => state.chatUser.value);
  const inputRef = useRef(null);
  const [conversation, setConversation] = useState(
    data.users.Jhon.chats[chatUser.name]
  );

  useEffect(() => {
    setConversation(data.users.Jhon.chats[chatUser.name]);
  }, [chatUser]);

  function addChat() {
    if (inputRef.current.value) {
      let newcons = [...conversation];
      newcons.push({
        text: inputRef.current.value,
        time: new Date().toLocaleString(),
        sentBy: "Jhon",
      });
      setConversation(newcons);
      toast.success('Success');
    } else {
      alert(inputRef.current.value);
      toast.error('Error');
    }
  }
  return (
    <>
      <Toaster />
      <div className="main">
        <div className="chat-box">
          <div className="chats">
            {conversation.map((msg, idx) => (
              <div className={"msg " + `${msg.sentBy==="Jhon"?"left":"right"}` +"-msg"}>
              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">{msg.sentBy}</div>
                  <div className="msg-info-time">{msg.time}</div>
                </div>

                <div className="msg-text">{msg.text}</div>
              </div>
              </div>
              // <p className={msg.sentBy==="Jhon"?"right-box":"left-box"} key={idx}>{msg.text}</p>
            ))}
          </div>
          <div className="chatInput">
            <input
              type="text"
              name="chat-input"
              id="chat-input"
              ref={inputRef}
              placeholder="Enter Your Message.."
            />
            <button id="submit" onClick={() => addChat()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

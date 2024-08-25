/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import AiChat from "./aichat";
import UserChat from "./userchat";

const ChatArea = ({ messages }) => {
    const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-area">
        {messages.map((msg,index) => (
           <><UserChat key = {index} usertext={msg}/>
           <AiChat key={index} reply="Apologies, but I’m currently not equipped to respond to your messages at this time." tktimg="" />
           <div ref={chatEndRef} />
           </>
        ))}
     
      
    </div>
  );
};





  

export default ChatArea;

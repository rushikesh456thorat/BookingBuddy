import { useEffect, useRef } from "react";
import AiChat from "../chatbot/aichat"; 
import UserChat from "../chatbot/userchat";
import useConvertion from "../../chatStore/conversation";


const ChatArea = () => {
  const chatEndRef = useRef(null);
  const { chat } = useConvertion()
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    
  }, [chat]);

  return (
    <div className="chat-area">
      {chat.map((msg, index) => (
        msg.who === "user" ? (
          <UserChat key={`user-${index}`} usertext={msg.response} />
        ) : (
          <AiChat key={`ai-${index}`} reply={msg.response} />
        )
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatArea;

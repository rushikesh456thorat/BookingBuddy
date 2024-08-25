import { useState } from "react";
import ChatArea from "./chatarea";
import ChatInput from "./chatinput";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-interface">
      <ChatArea messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatApp;

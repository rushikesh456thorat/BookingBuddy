import ChatArea from "./chatarea";
import ChatInput from "./chatinput";
import useConvertion from "../../chatStore/conversation";
import useApiCall from "../../hooks/useApiCall";
import { useState } from "react";
import SideBar from "../sidebar/sidebar";
import Welcome from "./welcome"; // Assuming Welcome component is in the same directory

const ChatApp = () => {
  const { chat, setChat } = useConvertion();
  const { ApiCall } = useApiCall();
  const [loading, setLoading] = useState(false);

  const handleSend = async (input) => {
    const userMessage = {
      who: "user",
      response: input,
    };
    setChat([...chat, userMessage]);
    setLoading(true);
    const aiReply = await ApiCall(input);

    console.log(aiReply);
    const aiMessage = {
      who: "Ai",
      response: aiReply,
    };

    setChat([...chat, userMessage, aiMessage]);
    setLoading(false);
  };

  return (
    <>
      <SideBar />
      <div className="chat-interface">
        {chat.length === 0 ? <Welcome onSend={handleSend} /> : <ChatArea />}
        <ChatInput onSend={handleSend} loading={loading} />
      </div>
    </>
  );
};

export default ChatApp;

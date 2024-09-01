import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const AiChat = ({ reply, tktimg }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const speed = 10;
    const txt = reply;
    let m = "";
    if (!txt){
      return
    }

    setIsTyping(true);

    function typeWriter() {
      if (i < txt.length) {
        m += txt.charAt(i);
        setText(m);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setIsTyping(false); // Stop typing animation
      }
    }

    typeWriter();

    return () => {
      setIsTyping(false); // Cleanup in case the effect is interrupted
    };
  }, [reply]);

  return (
    <div className="ai-reply">
      <div className="reply">
        <div className="ai-icon">
          <img
            src="https://i.pinimg.com/originals/37/de/fe/37defe4e260b089bc43392a9226e6d60.png"
            alt="AI Icon"
          />
        </div>
        <div id="reply-txt" className="reply-txt">
          {text}
          {isTyping == true && (
            <div className="typing-indicator">
              <div className="typing-dot"></div>
            </div>
          )}
        </div>
      </div>
      {tktimg && (
        <div className="reply-image">
          <img src={tktimg} alt="Ticket" />
        </div>
      )}
      <div className={`extra-accessibility`} style={{ visibility: isTyping ?  'hidden' :'visible'}}>
        <button className="read-aloud-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="read-aloud-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AiChat;

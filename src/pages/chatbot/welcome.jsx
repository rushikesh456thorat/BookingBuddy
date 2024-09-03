/* eslint-disable react/prop-types */
const Welcome = ({onSend}) => {
  return (
    <div className="welcome">
      <img src="../../../public/ico-removebg-preview.png"></img>
      <ul>
        
        <li onClick={()=>{onSend("Book ticket for museum.")}}>
          <div className="wel-ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div className="wel-txt">Book ticket for museum.</div>
        </li>
        <li onClick={()=>{onSend("संग्रहालय के लिए टिकट बुक करें")}}>
          <div className="wel-ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="wel-txt">संग्रहालय के लिए टिकट बुक करें</div>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;

/* eslint-disable react/prop-types */
const UserChat = ({usertext}) => {
  return (
    <div className="user-chat">
      <div className="user-txt">
        {usertext}
      </div>
    </div>
  );
};

export default UserChat;

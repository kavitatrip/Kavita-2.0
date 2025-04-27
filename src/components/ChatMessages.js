import React from "react";

const ChatMessages = ({ name, avatar, message, time }) => {
  return (
    <div className="flex items-start gap-2 my-1">
      {/* <div className="text-xl">{avatar}</div> */}
        <div className="text-xs font-semibold text-blue-600">
          {name}
        <span className="text-sm text-gray-800 ml-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessages;

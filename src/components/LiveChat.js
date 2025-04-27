import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, chatStart, chatStop } from "../utils/chatSlice";
import { generateMockChatMessage, messages } from "../utils/helper";
import store from "../utils/store";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatmessage = useSelector((store) => store.chatSlice.messages);
  const chatActive = useSelector((store) => store.chatSlice.chatActive);


  useEffect(() => {
    dispatch(chatStart());
    const state = store.getState();
    if(!state.chatSlice.chatActive) return;

      const chats = setInterval(() => {
        const mockMsg = generateMockChatMessage();
        dispatch(
          addMessage({
            name: mockMsg.username,
            avatar: mockMsg.avatar,
            message: mockMsg.message,
          })
        );
      }, 1500);
      return () => {
        dispatch(chatStop());
        setInterval(chats);
      }
    
  }, [dispatch]);

  // if (!chatActive) return;

  return (
    <div>
      <div className="border border-gray-200 bg-gray-100 rounded-md p-1 ml-2 h-78 overflow-y-scroll flex flex-col-reverse">
        {chatmessage.map((chat, index) => (
          <ChatMessages
            key={index}
            name={chat.name}
            avatar={chat.avatar}
            message={chat.message}
            time={chat.time}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("enter");
          dispatch(
            addMessage({
              name: "Kavita Tripathi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border w-full m-2 rounded-md px-2"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
      </form>
    </div>
  );
};
export default LiveChat;

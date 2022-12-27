import { useState } from "react";
import ConversationCard from "../../molecules/ConversationCard";

type ConversationType = {
  user: string;
  time: Date;
};

function InboxList() {
  const [conversations] = useState<Array<ConversationType>>([
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
    { user: "Raj", time: new Date(Date.now()) },
  ]);

  return (
    <div className='flex flex-col w-full'>
      <div
        id='header'
        className='h-16 w-1/4 fixed text-slate-700 z-10 flex items-center justify-center shadow-md backdrop-blur-sm bg-white/90'
      >
        <h1 className='text-center text-xl font-extrabold '>Conversations</h1>
      </div>
      <div className='w-full mt-16 py-6 flex flex-col justify-center items-center '>
        {conversations.map((convCard, index) => (
          <ConversationCard
            name={convCard.user}
            time={convCard.time}
            lastMessage='Hello there ! Is this our first message?'
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default InboxList;

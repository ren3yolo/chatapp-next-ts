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
  ]);

  return (
    <div className='flex flex-col relative shadow-2xl'>
      <div
        id='header'
        className='h-20 w-full mb-6 sticky top-16 bg-white z-10 flex items-center justify-center shadow-md'
      >
        <h1 className='text-center text-xl'>Conversations</h1>
      </div>
      <div className='mx-6 overflow-y-scroll'>
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

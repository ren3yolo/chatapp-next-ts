import { useState } from "react";
import ChatWindow from "../../components/templates/ChatWindow";
import InboxList from "../../components/templates/InboxList";

function Inbox() {
  const [sender, setSender] = useState(null);

  return (
    <div className='w-screen'>
      <div className='flex'>
        <div className='w-1/4 shadow-2xl h-screen overflow-auto'>
          <InboxList selectSender={setSender} />
        </div>
        <div className='h-screen'>
          <ChatWindow sender={sender} />
        </div>
      </div>
    </div>
  );
}

export default Inbox;

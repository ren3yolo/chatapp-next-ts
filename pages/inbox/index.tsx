import InboxList from "../../components/templates/InboxList";

function Inbox() {
  return (
    <div className='w-screen'>
      <div className='flex'>
        <div className='w-1/4 shadow-2xl h-screen overflow-auto'>
          <InboxList />
        </div>
        <div className='h-screen'>Conversation with Someone</div>
      </div>
    </div>
  );
}

export default Inbox;

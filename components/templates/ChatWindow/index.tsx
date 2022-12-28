type ChatWindowProps = {
  sender: string | null;
};

function ChatWindow({ sender }: ChatWindowProps) {
  console.log(sender);

  return (
    <>
      {sender ? (
        <h1>Conversation with {sender}</h1>
      ) : (
        <h1 className='text-xl'>No message selected</h1>
      )}
    </>
  );
}

export default ChatWindow;

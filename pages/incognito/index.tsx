import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import socket from "../../socket/create";

import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import { useSession } from "next-auth/react";

type Users = {
  name: string;
  email: string;
};

type MessageType = {
  sender: Users;
  content: string;
};

type ThreadText = {
  sender: string;
  content: string;
};

function IncognitoChat() {
  const [users, setUsers] = useState<Array<Users>>([]);
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  const [thread, setThread] = useState<Array<ThreadText>>([]);

  useEffect(() => {
    //connect and display alert when socket connection is made
    if (session?.user?.email && session.user.name) {
      socket.auth = { email: session?.user?.email, name: session?.user?.name };
      socket.connect();
      socket.on("connect", () => {
        //   alert("You are now connected ! ");
      });

      socket.on("users", (users: Array<Users>) => {
        let otherUsers = users.filter(
          (user) => user.email !== session.user?.email
        );
        setUsers(otherUsers);
      });

      socket.on("user connected", (user: Users) => {
        let list = [...users];
        list.push(user);
        setUsers(list);
      });

      socket.on("update thread", (threadText: ThreadText) => {
        console.log(threadText.sender, threadText.content);
        let list = [...thread];
        list.push(threadText);
        setThread(list);
      });
    }
  }, [users, session?.user?.name, session?.user?.email, thread]);

  function handleMessageSend(e: FormEvent) {
    e.preventDefault();

    const body: MessageType = {
      sender: {
        name: session?.user?.name || "",
        email: session?.user?.email || "",
      },
      content: message,
    };
    socket.emit("message", body);
    setMessage("");
  }

  return (
    <div className='h-screen'>
      <h1 className='text-2xl w-screen flex justify-center mt-10'>
        This is an incognito thread
      </h1>
      <div className='m-10'>
        <ul>
          {thread.map((text, index) => (
            <li key={index}>
              {text.sender}: {text.content}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-auto '>
        <form
          className='flex h-full items-end  m-10 mt-auto'
          onSubmit={handleMessageSend}
        >
          <Input
            type='text'
            value={message}
            placeholder='Type a message...'
            fullWidth
            className='mx-2'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <Button variant='secondary' className='w-20 '>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default IncognitoChat;

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "../../atoms/Spinner";
import ConversationCard from "../../molecules/ConversationCard";

type InboxListProps = {
  selectSender: Function;
};

function InboxList({ selectSender }: InboxListProps) {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        url: "/api/messages",
        // @ts-ignore
        params: { id: data?.user.id },
      });
      setLoading(false);
      if (response.status === 200) {
        setConversations(response.data.rooms);
      }
    };
    getUsers();
  }, [data?.user]);

  return (
    <>
      <Spinner loading={loading} />
      <div className='flex flex-col w-full'>
        <div
          id='header'
          className='h-16 w-1/4 fixed text-slate-700 z-10 flex items-center justify-center shadow-md backdrop-blur-sm bg-white/90'
        >
          <h1 className='text-center text-xl font-extrabold '>Conversations</h1>
        </div>
        <div className='w-full mt-16 py-6 flex flex-col justify-center items-center '>
          {conversations?.map((convCard, index) => (
            <ConversationCard
              name={convCard[1]}
              selectSender={selectSender}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default InboxList;

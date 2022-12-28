import { useState } from "react";

//custom imports
import Navbar from "../../../components/organisms/Navbar";
import Searchbar from "../../../components/molecules/Search";
import UserCard from "../../../components/molecules/UserCard";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export type UserType = {
  name: string;
  email: string;
  _id: string;
};

function Inbox() {
  const [user, setUser] = useState<UserType | null>(null);
  const { data } = useSession();
  const router = useRouter();
  console.log(data);

  async function createRoom() {
    // @ts-ignore
    const loggedUserId = data?.user?.id;
    const searchedUserId = user?._id;

    if (loggedUserId && searchedUserId && loggedUserId !== searchedUserId) {
      let roomName: string =
        loggedUserId > searchedUserId
          ? `${searchedUserId}_${loggedUserId}`
          : `${loggedUserId}_${searchedUserId}`;
      const response = await axios.post(`/api/rooms`, { name: roomName });
      if (response.status === 200) {
        router.push("/inbox");
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className='w-96'>
        <Searchbar onSuccess={(u: UserType) => setUser(u)} />
        {user ? (
          <UserCard
            name={user.name}
            email={user.email}
            handleMessageInitiate={createRoom}
          />
        ) : null}
      </div>
    </>
  );
}

export default Inbox;

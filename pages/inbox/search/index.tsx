import { useState } from "react";

//custom imports
import Navbar from "../../../components/organisms/Navbar";
import Searchbar from "../../../components/molecules/Search";
import UserCard from "../../../components/molecules/UserCard";

export type UserType = {
  name: string;
  email: string;
};

function Inbox() {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <>
      <Navbar />
      <div className='w-96'>
        <Searchbar onSuccess={(u: UserType) => setUser(u)} />
        {user ? <UserCard name={user.name} email={user.email} /> : null}
      </div>
    </>
  );
}

export default Inbox;

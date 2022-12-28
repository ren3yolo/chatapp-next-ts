import { MouseEventHandler } from "react";
import Button from "../../atoms/Button/Button";

type UserCardProps = {
  email: string;
  name: string;
  handleMessageInitiate: MouseEventHandler;
};

function UserCard({ name, handleMessageInitiate }: UserCardProps) {
  return (
    <div className='w-screen flex justify-center'>
      <div
        id='user card'
        className='w-96 m-10 p-4 border-2 rounded-lg shadow-md grid grid-cols-2'
      >
        <div id='avatar' className='w-fit flex items-center'>
          <div className='h-16 w-16 rounded-full flex justify-center items-center bg-indigo-600'>
            <h1 className='text-3xl font-extrabold text-white'>
              {name[0].toUpperCase()}
            </h1>
          </div>
          <div id='user information' className='flex flex-col ml-6'>
            <h1 className='text'>{name}</h1>
          </div>
        </div>
        <div className='relative bottom-2'>
          <Button variant='secondary' onClick={handleMessageInitiate} fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

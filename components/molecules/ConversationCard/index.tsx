import Avatar from "../../atoms/Avatar";

type ConversationCardProps = {
  name: string;
  time: Date;
  lastMessage: string;
};

function ConversationCard({ name, lastMessage }: ConversationCardProps) {
  return (
    <div className='h-28 mt-4 px-6 py-2 w-full relative rounded-lg flex bg-slate-600 text-white hover:cursor-pointer overflow-hidden'>
      <div className='flex items-center'>
        <Avatar initials={name[0]} />
      </div>
      <div className='ml-2 w-full flex flex-col'>
        <span className='block ml-auto float-right text-slate-400 text-xs'>
          Yesterday
        </span>
        <h4 className=' flex items-center ml-2'>{name}</h4>
        <p className='ml-2 text-slate-400 text-sm lg:visible'>{lastMessage}</p>
      </div>
    </div>
  );
}

export default ConversationCard;

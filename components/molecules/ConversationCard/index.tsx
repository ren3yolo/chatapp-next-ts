import Avatar from "../../atoms/Avatar";

type ConversationCardProps = {
  name: string;
  time: Date;
  lastMessage: string;
};

function ConversationCard({ name, lastMessage }: ConversationCardProps) {
  return (
    <div className='h-28 group text-black  px-6 py-2 mt-4 w-11/12 rounded-xl bg-orange-300 shadow-xl relative flex hover:bg-slate-700 hover:cursor-pointer overflow-hidden hover:scale-95 duration-150'>
      <div className='flex items-center'>
        <Avatar initials={name[0]} />
      </div>
      <div className='ml-2 w-full flex flex-col group-hover:text-slate-50 group'>
        <span className='block ml-auto float-right text-xs'>Yesterday</span>
        <h4 className=' flex items-center ml-2 font-semibold'>{name}</h4>
        <p className='ml-2 text-sm md:visible '>{lastMessage}</p>
      </div>
    </div>
  );
}

export default ConversationCard;

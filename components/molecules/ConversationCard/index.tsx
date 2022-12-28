import Avatar from "../../atoms/Avatar";

type ConversationCardProps = {
  name: string;
  time: Date;
  lastMessage?: string;
  selectSender: Function;
};

function ConversationCard({ name, selectSender }: ConversationCardProps) {
  return (
    <div
      onClick={() => selectSender(name)}
      className='h-auto group text-white px-6 py-6 mt-4 w-11/12 rounded-xl bg-slate-700 shadow-lg hover:shadow-2xl relative flex hover:bg-orange-300 hover:cursor-pointer overflow-hidden hover:scale-95 duration-150'
    >
      <div className='flex items-center'>
        <Avatar initials={name[0]} />
      </div>
      <div className='ml-2 w-full flex justify-between group-hover:text-slate-700 group'>
        <h4 className='ml-2 font-semibold flex items-center'>{name}</h4>
        <span className='text-xs flex items-center'>Yesterday</span>
        {/* <p className='ml-2 text-sm md:visible '>{lastMessage}</p> */}
      </div>
    </div>
  );
}

export default ConversationCard;

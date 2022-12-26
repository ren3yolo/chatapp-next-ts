import Navbar from "../../components/organisms/Navbar";
import InboxList from "../../components/templates/InboxList";

function Inbox() {
  return (
    <div className='w-screen h-screen grid-rows-6 mt-12'>
      <Navbar />
      <div className='grid grid-cols-12'>
        <div className='col-span-3 h-screen'>
          <InboxList />
        </div>
      </div>
    </div>
  );
}

export default Inbox;

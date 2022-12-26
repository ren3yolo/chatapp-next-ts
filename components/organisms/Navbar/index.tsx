function Navbar() {
  return (
    <div className='fixed z-20 top-0 h-16 w-screen bg-pink-700 text-white border-b-2 border-neutral-200 grid sm:grid-cols-1 md: grid-cols3 shadow-md'>
      <div className='flex justify-start items-center h-full w-full'>
        <h1 className='text-2xl ml-10'>Chatter</h1>
      </div>
    </div>
  );
}

export default Navbar;

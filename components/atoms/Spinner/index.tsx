type SpinnerProps = {
  loading: boolean;
};

function Spinner({ loading }: SpinnerProps) {
  return (
    <>
      {loading ? (
        <div className='absolute h-screen w-screen flex justify-center items-center z-10 backdrop-blur-sm'>
          <div className='h-20 w-20 border-t-4 border-l-4 border-pink-600 rounded-full animate-spin'></div>
        </div>
      ) : null}
    </>
  );
}

export default Spinner;

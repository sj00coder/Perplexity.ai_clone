function Loader() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-100">
      <div
        className='inline-block h-[4rem] w-[4rem] animate-spin rounded-full border-4 border-solid border-superDuper border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Loader;

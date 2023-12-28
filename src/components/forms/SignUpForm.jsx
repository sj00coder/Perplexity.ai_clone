import { signInWithGoogle } from '../../Firebase';

function SignUpForm() {
  return (
    <div className='flex flex-col h-full'>
      <div className='py-md px-md md:px-xl grow md:pt-xl md:pb-xl'>
        <div className='text-center super font-display text-4xl md:text-6xl text-super  selection:bg-superDuper selection:text-textMain'>
          Welcome
        </div>
        <div className=''>
          <div className='text-center mt-sm default font-sans text-base text-textMain  selection:bg-superDuper selection:text-textMain'>
            Sign in or sign up to continue
          </div>
          <div className='max-w-sm mx-auto mt-lg'>
            <div className=' space-y-sm'>
              <button
                type='button'
                className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                onClick={signInWithGoogle}
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='google'
                    className='svg-inline--fa fa-google fa-fw fa-1x '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 488 512'
                  >
                    <path
                      fill='currentColor'
                      d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                    ></path>
                  </svg>
                  <div className='text-align-center relative'>
                    Continue with Google
                  </div>
                </div>
              </button>
              <button
                type='button'
                className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='apple'
                    className='svg-inline--fa fa-apple fa-fw fa-1x '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path
                      fill='currentColor'
                      d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                    ></path>
                  </svg>
                  <div className='text-align-center relative'>
                    Continue with Apple
                  </div>
                </div>
              </button>
            </div>
            <div className='border-t mt-md pt-md space-y-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
              <div>
                <div className='rounded-full'>
                  <div className='relative flex items-center'>
                    <input
                      type='email'
                      placeholder='henry@example.com'
                      className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md'
                      autoComplete='off'
                      value=''
                    />
                    <div></div>
                    <div className='absolute flex items-center gap-sm bg-background  rounded-full right-sm'></div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button
                  type='button'
                  className='md:hover:bg-offsetPlus text-textOff  md:hover:text-textMain    font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
                >
                  <div className='flex items-center leading-none justify-center gap-xs'>
                    <div className='text-align-center relative'>
                      Continue with Email
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

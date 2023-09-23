import { useAuthState } from 'react-firebase-hooks/auth';
import EditSVG from '../svg/EditSVG';
import { auth } from '../../Firebase';
import { useState } from 'react';

function Step1Page() {
  const [user, ,] = useAuthState(auth);
  const [userName, setUserName] = useState(user?.displayName);
  return (
    <>
      <div className='mb-lg space-y-xs'>
        <h1 className='default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          Create your account
        </h1>
        <div className='light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'></div>
      </div>
      <div>
        <div className='border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
          <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
            Avatar
          </div>
          <div className='relative inline-block mt-sm'>
            <div className='relative'>
              <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-[80px] border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'>
                <img
                  alt='User avatar'
                  className='w-full h-auto'
                  src={user?.photoURL}
                />
                <div className='absolute bottom-0 right-0'>
                  <button
                    type='button'
                    className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <EditSVG classes='svg-inline--fa fa-pen-to-square fa-fw fa-1x ' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-sm mt-md max-w-md'>
            <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
              Username
            </div>
            <div>
              <div className='rounded-full'>
                <div className='relative flex items-center'>
                  <input
                    placeholder={`${userName}-12458`}
                    className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md'
                    autoComplete='off'
                    value={`${userName || 'Name'}-12458`}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div></div>
                  <div className='absolute flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full right-sm'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step1Page;

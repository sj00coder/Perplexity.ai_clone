import { useState } from 'react';

function FollowUpSearchBar() {
  const [query, setQuery] = useState('');
  return (
    <div className='w-full  border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
      <div className=' flex items-center gap-x-xs transition-all duration-200 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
        <div className='grow transition-all duration-200'>
          <div className='grow'>
            <div>
              <div className='rounded-full md:p-sm bg-offset dark:bg-offsetDark'>
                <div className='relative flex items-center'>
                  <div className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff shadow-sm rounded-t-[32px] rounded-b-[32px] py-md px-lg pr-[128px] md:pr-[138px]'>
                    <textarea
                      placeholder='Ask follow-up...'
                      className='overflow-auto h-[24px] max-h-[50vh] outline-none w-full flex items-center font-sans duration-200 transition-all caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <div></div>
                  <div className='absolute flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full right-sm'>
                    <button
                      type='button'
                      className='   text-textOff dark:text-textOffDark md:hover:text-textMain  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
                    >
                      <div className='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
                        <div className='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
                          <div className='border border-borderMain/40 rounded py-two px-xs default text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                            <span className='text-textMainDark'>Ctrl + .</span>
                          </div>
                          <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                            <span className='text-textMainDark'>
                              5 left. Reloads every 4 hours.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center leading-none justify-center gap-xs'>
                        <div>
                          <div className='rounded-full  p-[3px] border  transition duration-300 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                            <div className='relative w-8 transition duration-200 ease-in-out'>
                              <div className='rounded-full h-4 w-4 transition-all duration-300 ease-in-out shadow-sm md:group-hover:scale-90 ml-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'></div>
                            </div>
                          </div>
                        </div>
                        <div className='text-align-center relative'>
                          Copilot
                        </div>
                      </div>
                    </button>
                    <button
                      type='button'
                      className={`${
                        !query ? 'bg-offsetPlus' : 'bg-super'
                      } dark:bg-offsetPlusDark ${
                        !query ? 'text-textMain' : 'text-white'
                      } dark:text-textMainDark  ${
                        query
                          ? 'hover:opacity-80'
                          : 'md:hover:text-textOff md:dark:hover:text-textOffDark'
                      } focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8`}
                    >
                      <div className='flex items-center leading-none justify-center gap-xs'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fasr'
                          data-icon='arrow-up'
                          className='svg-inline--fa fa-arrow-up fa-fw fa-lg '
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                        >
                          <path
                            fill='currentColor'
                            d='M209 50.2l-17-17-17 17L21.4 203.8l-17 17 33.9 33.9 17-17L168 125.1V456v24h48V456 125.1L328.6 237.8l17 17 33.9-33.9-17-17L209 50.2z'
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FollowUpSearchBar;

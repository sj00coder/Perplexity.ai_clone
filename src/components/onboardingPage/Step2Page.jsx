function Step2Page() {
  return (
    <>
      <div className='mb-lg space-y-xs'>
        <h1 className='default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          Try Pro
        </h1>
        <div className='light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'></div>
      </div>
      <div>
        <div className='mt-lg default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          Unlock the most powerful AI research assistant.
        </div>
        <div className='mt-lg border-t pt-lg border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
          <div className='grid md:grid-cols-2 gap-lg'>
            <div className='flex items-baseline gap-x-md'>
              <div className='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fasr'
                  data-icon='infinity'
                  className='svg-inline--fa fa-infinity fa-fw fa-lg '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M0 96H24 192h10.4l7.1 7.6L320 221 430.5 103.6l7.1-7.6H448 616h24v24V392v24H616 448 437.6l-7.1-7.6L320 291 209.5 408.4l-7.1 7.6H192 24 0V392 120 96zM287 256L181.6 144H48V368H181.6L287 256zm65.9 0L458.4 368H592V144H458.4L353 256z'
                  ></path>
                </svg>
              </div>
              <div>
                <div className='default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  More Copilot uses
                </div>
                <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  Use Copilot for more comprehensive answers (300+ per day)
                </div>
              </div>
            </div>
            <div className='flex items-baseline gap-x-md'>
              <div className='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fasr'
                  data-icon='microchip-ai'
                  className='svg-inline--fa fa-microchip-ai fa-fw fa-lg '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M184 0V24 64h48V24 0h48V24 64h48V24 0h48V24 64h24 48v48 24h40 24v48H488 448v48h40 24v48H488 448v48h40 24v48H488 448v24 48H400 376v40 24H328V488 448H280v40 24H232V488 448H184v40 24H136V488 448H112 64V400 376H24 0V328H24 64V280H24 0V232H24 64V184H24 0V136H24 64V112 64h48 24V24 0h48zM400 112H112V400H400V112zm-44 64v16V320v16H316V320 192 176h40zm-124.7 0l3.4 8.8L293.3 336H250.4l-7.8-20H189.4l-7.8 20H138.8l58.6-151.2 3.4-8.8h30.5zM216 247.4L204.9 276h22.2L216 247.4z'
                  ></path>
                </svg>
              </div>
              <div>
                <div className='default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  Unlock the best AI models
                </div>
                <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  Use Claude-2 or GPT-4 for all questions (300+ per day)
                </div>
              </div>
            </div>
            <div className='flex items-baseline gap-x-md'>
              <div className='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fasr'
                  data-icon='files'
                  className='svg-inline--fa fa-files fa-fw fa-lg '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='currentColor'
                    d='M144 368H400V128H320V48H144V368zM352 0l96 96V368v48H400 144 96V368 48 0h48H352zM48 96v24V464H328h24v48H328 24 0V488 120 96H48z'
                  ></path>
                </svg>
              </div>
              <div>
                <div className='default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  Unlimited file upload
                </div>
                <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  Ask your files anything
                </div>
              </div>
            </div>
            <div className='flex items-baseline gap-x-md'>
              <div className='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fasr'
                  data-icon='user-group-crown'
                  className='svg-inline--fa fa-user-group-crown fa-fw fa-lg '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M96 0l48 24 16 8L224 0l64 32 16-8L352 0V53.7 144c0 70.7-57.3 128-128 128s-128-57.3-128-128V53.7 0zm48 144c0 44.2 35.8 80 80 80s80-35.8 80-80V128H144v16zM65 464H383L348.5 352H99.5L65 464zM64 304H384l49.2 160L448 512H397.8 50.2 0l14.8-48L64 304zM640 512H481.5l-2.9-9.4L422.4 320H576l64 192zM432 256c-27.7 0-53-10.1-72.6-26.7C375 204.6 384 175.4 384 144V53.7 42.8C398.5 35.9 414.8 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z'
                  ></path>
                </svg>
              </div>
              <div>
                <div className='default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  Pro support
                </div>
                <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  Private Discord channel with other Pro users and employees
                </div>
              </div>
            </div>
            <div className='p-md border rounded flex flex-col mt-md border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div className='flex-grow'>
                <div className='relative mb-sm'>
                  <div className='super text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-super dark:text-superDark selection:bg-superDuper selection:text-textMain'>
                    Monthly
                  </div>
                </div>
                <h2 className='default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  $20
                </h2>
                <div className='mb-md light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  billed per month
                </div>
              </div>
              <div>
                <div className='items-center gap-md'>
                  <button
                    type='button'
                    className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <div className='text-align-center relative'>
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='p-md border rounded flex flex-col mt-md border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div className='flex-grow'>
                <div className='relative mb-sm'>
                  <div className='super text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-super dark:text-superDark selection:bg-superDuper selection:text-textMain'>
                    Yearly
                  </div>
                  <div className='px-sm py-two rounded-full absolute right-0 -top-xs border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
                    <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                      Save $40 a year
                    </div>
                  </div>
                </div>
                <h2 className='default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  $200
                </h2>
                <div className='mb-md light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                  billed per year
                </div>
              </div>
              <div>
                <div className='mb-sm super font-sans text-xs font-medium text-super dark:text-superDark selection:bg-superDuper selection:text-textMain'>
                  <span className='mr-xs'>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fasr'
                      data-icon='gift'
                      className='svg-inline--fa fa-gift '
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M231.9 44.4C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88c0 14.4 3.5 28 9.6 40H48 0v48 64 48H32V464v48H80 432h48V464 288h32V240 176 128H464 438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41zM464 176v64H432 288V176h72H464zm-240 0v64H80 48V176H152h72zm0 112V464H80V288H224zm64 176V288H432V464H288zm72-336H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-136 0H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8L225.3 128H224z'
                      ></path>
                    </svg>
                  </span>
                  <span>7 day free trial</span>
                </div>
                <div className='items-center gap-md'>
                  <button
                    type='button'
                    className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <div className='text-align-center relative'>
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2Page;

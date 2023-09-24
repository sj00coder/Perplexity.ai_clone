import { PropTypes } from 'prop-types';
function Header({ user }) {
  return (
    <div className='md:rounded-t-xl sticky left-0 right-0 top-0 md:mb-0 z-[15] border-b border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
      <div className='flex items-center justify-between gap-x-md md:min-h-[53px] py-sm px-md'>
        <div className='hidden md:block'>
          <div className='flex items-center gap-x-md'>
            <div className=' rounded-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div className='flex items-center gap-x-xs relative'>
                <div className='relative'>
                  <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-5 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'>
                    {user ? (
                      <img
                        alt='User avatar'
                        className='w-full h-auto'
                        src={user.photoURL}
                      />
                    ) : (
                      <div className='light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fass'
                          data-icon='user-secret'
                          className='svg-inline--fa fa-user-secret fa-xs '
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path
                            fill='currentColor'
                            d='M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 14.3-25 27.1-64.6 35.9c.4 4 .6 8 .6 12.1c0 17-3.3 33.2-9.3 48H416L375.3 336H416l32 176H0L32 336H72.7L32 224h73.3c-6-14.8-9.3-31-9.3-48c0-4.1 .2-8.1 .6-12.1C57 155.1 32 142.3 32 128c0-17 35.5-32 89.1-40.5zM144 224h64l8-32h16l8 32h64l13.5-54.1C289.8 173.8 258 176 224 176s-65.8-2.2-93.5-6.1L144 224zm-16 64l48 192 32-128-16-32-64-32zM272 480l48-192-64 32-16 32 32 128z'
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className='line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  {user?.displayName || 'Anonymous'}
                </div>
              </div>
            </div>
            {!user && (
              <div className='flex items-center gap-x-sm  border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <div className='border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                  <div className='flex items-center gap-x-xs transition duration-300 select-none cursor-pointer hover:text-superAlt light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                    <div className=''>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fasr'
                        data-icon='heart'
                        className='svg-inline--fa fa-heart fa-fw fa-sm '
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M256 163.9L222.1 130l-24.2-24.2C181.4 89.3 159 80 135.8 80C87.3 80 48 119.3 48 167.8c0 23.3 9.2 45.6 25.7 62.1l24.2 24.2L256 412.1 414.1 254.1l24.2-24.2c16.5-16.5 25.7-38.8 25.7-62.1c0-48.5-39.3-87.8-87.8-87.8c-23.3 0-45.6 9.2-62.1 25.7L289.9 130 256 163.9zm33.9 282.2L256 480l-33.9-33.9L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c0 0 0 0 0 0c25.5-25.4 60-39.7 96-39.7C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 289.9 446.1z'
                        ></path>
                      </svg>
                    </div>
                    <div>Like</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='flex items-center gap-x-sm md:hidden'>
          <a href='/'>
            <div className=''>
              <div className='h-auto group  w-6 md:w-8'>
                <svg
                  viewBox='0 0 226 288'
                  stroke='none'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M188.522 11.1777L112.561 87.207H188.522V11.1777Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M112.562 87.207L36.5957 11.1777V87.207H112.562Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M112.396 0L112.395 288'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M188.522 163.232L112.561 87.2031V196.201L188.522 272.231V163.232Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M36.5957 163.232L112.562 87.2031V196.201L36.5957 272.231V163.232Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M4 87.2031V195.764H36.5949V163.232L112.561 87.2031H4Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                  <path
                    d='M112.561 87.2031L188.522 163.232V195.764H221.122V87.2031H112.561Z'
                    className='stroke-textMain dark:stroke-textMainDark'
                    strokeWidth='9'
                    strokeMiterlimit='9'
                  ></path>
                </svg>
              </div>
            </div>
          </a>
          <a
            className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
            href='/'
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fasr'
                data-icon='plus'
                className='svg-inline--fa fa-plus fa-fw fa-1x '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M248 72V48H200V72 232H40 16v48H40 200V440v24h48V440 280H408h24V232H408 248V72z'
                ></path>
              </svg>
              <div className='text-align-center relative'>New</div>
            </div>
          </a>
        </div>
        <div className='grow max-w-md text-center hidden md:flex items-center gap-x-xs justify-center'>
          <div>
            <div>
              <div className='flex items-center gap-x-xs cursor-pointer hover:opacity-70 duration-300 transition line-clamp-1 px-sm py-xs select-none light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                <div>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fass'
                    data-icon='plus'
                    className='svg-inline--fa fa-plus '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z'
                    ></path>
                  </svg>
                </div>
                <div>Collection</div>
              </div>
            </div>
          </div>
          <div className='light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='slash-forward'
              className='svg-inline--fa fa-slash-forward '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M311 0H257.7L9 512H62.3L311 0z'
              ></path>
            </svg>
          </div>
          <span>
            <span className='cursor-pointer hover:opacity-70 transition duration-300'>
              <div className='px-sm py-sm  light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                <span className='line-clamp-1'>Untitled</span>
              </div>
            </span>
          </span>
        </div>
        <div className='flex items-center gap-x-sm'>
          <div className='-mr-xs'>
            <div>
              <button
                type='button'
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fasr'
                    data-icon='ellipsis'
                    className='svg-inline--fa fa-ellipsis fa-fw fa-1x '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M24 296l0-80 80 0 0 80-80 0zm160 0l0-80 80 0 0 80-80 0zm160-80l80 0 0 80-80 0 0-80z'
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='transition-all duration-300 opacity flex items-center gap-x-xs md:gap-x-0 opacity-100'>
            <div className='flex items-center gap-x-sm'>
              <div>
                <button
                  type='button'
                  className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
                >
                  <div className='flex items-center leading-none justify-center gap-xs'>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fass'
                      data-icon='lock'
                      className='svg-inline--fa fa-lock fa-fw fa-1x '
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path
                        fill='currentColor'
                        d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h80V512H0V192H80z'
                      ></path>
                    </svg>
                    <div className='text-align-center relative'>Share</div>
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

Header.propTypes = {
  user: PropTypes.object,
};
export default Header;

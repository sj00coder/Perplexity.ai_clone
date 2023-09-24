import { PropTypes } from 'prop-types';
import Avatar from '../Avatar';
import LikeButton from '../buttons/LikeButton';
function Header({ user }) {
  return (
    <div className='md:rounded-t-xl sticky left-0 right-0 top-0 md:mb-0 z-[15] border-b border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
      <div className='flex items-center justify-between gap-x-md md:min-h-[53px] py-sm px-md'>
        <div className='hidden md:block'>
          <div className='flex items-center gap-x-md'>
            <Avatar photoUrl={user?.photoURL} displayName={user?.displayName} />
            {!user && <LikeButton />}
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

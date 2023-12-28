import { PropTypes } from 'prop-types';
import AndroidSVG from '../svg/AndroidSVG';
import LogoSVG from '../svg/LogoSVG';

function Header({ user }) {
  return (
    <div className='md:hidden border-b py-lg flex items-center justify-between border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
      <div className='h-auto group w-40 md:w-52'>
        <LogoSVG />
      </div>
      <div className='flex items-center gap-x-sm'>
        <a
          className='bg-super   text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
          style={{ WebkitTapHighlightColor: 'transparent' }}
          href='/download-mobile'
        >
          <div className='flex items-center leading-none justify-center gap-xs'>
            <AndroidSVG classes={'svg-inline--fa fa-android fa-fw fa-1x '} />
            <div className='text-align-center relative'>Get App</div>
          </div>
        </a>
        {user ? (
          <a href='/settings'>
            <div className='relative'>
              <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-8 border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offsetPlus '>
                <img
                  alt='User avatar'
                  className='w-full h-auto'
                  src={user?.photoURL}
                />
              </div>
            </div>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;

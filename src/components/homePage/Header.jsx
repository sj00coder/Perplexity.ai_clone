import AndroidSVG from '../svg/AndroidSVG';
import LogoSVG from '../svg/LogoSVG';

function Header() {
  return (
    <div className='md:hidden border-b py-lg flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
      <div className='h-auto group w-40 md:w-52'>
        <LogoSVG />
      </div>
      <div className='flex items-center gap-x-sm'>
        <a
          className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
          style={{ WebkitTapHighlightColor: 'transparent' }}
          href='/download-mobile'
        >
          <div className='flex items-center leading-none justify-center gap-xs'>
            <AndroidSVG classes={'svg-inline--fa fa-android fa-fw fa-1x '} />
            <div className='text-align-center relative'>Get App</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;

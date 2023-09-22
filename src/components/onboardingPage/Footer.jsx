import AiProfileSVG from '../svg/AiProfileSVG';
import DiscoverSVG from '../svg/DiscoverSVG';
import MagnifingGlassSVG from '../svg/MaginfingGlassSVG';
import VerticalHistorySVG from '../svg/VerticalHistory';
function Footer() {
  return (
    <div className='md:hidden bottom-0 fixed left-0 right-0 z-20 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
      <div className='px-sm  h-[64px] relative shadow-md border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
        <div className='items-center relative  gap-x-xs flex h-full w-full'>
          <div className='relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center'>
            <div className='justify-center'>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='/'
              >
                <div className='flex items-center leading-none flex-col gap-sm'>
                  <MagnifingGlassSVG classes='svg-inline--fa fa-magnifying-glass fa-fw fa-lg ' />
                  <div className='text-align-center relative'>Home</div>
                </div>
              </a>
            </div>
          </div>
          <div className='relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center'>
            <div className='justify-center'>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='/discover'
              >
                <div className='flex items-center leading-none flex-col gap-sm'>
                  <DiscoverSVG
                    classes={'svg-inline--fa fa-compass fa-fw fa-lg '}
                  />
                  <div className='text-align-center relative'>Discover</div>
                </div>
              </a>
            </div>
          </div>
          <div className='relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center'>
            <div className='justify-center'>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='/library'
              >
                <div className='flex items-center leading-none flex-col gap-sm'>
                  <VerticalHistorySVG classes='svg-inline--fa fa-rectangle-vertical-history fa-fw fa-lg ' />
                  <div className='text-align-center relative'>Library</div>
                </div>
              </a>
            </div>
            <div className='pointer-events-none absolute right-0 md:right-md rounded p-xs bg-alert text-white top-[10px] default text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
              New
            </div>
          </div>
          <div className='relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center'>
            <div className='justify-center'>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='/profile'
              >
                <div className='flex items-center leading-none flex-col gap-sm'>
                  <AiProfileSVG classes='svg-inline--fa fa-circle-nodes fa-fw fa-lg ' />
                  <div className='text-align-center relative'>AI Profile</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='ml-md mt-md mr-md hidden md:block'></div>
      </div>
    </div>
  );
}
export default Footer;

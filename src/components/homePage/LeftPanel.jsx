import { useState } from 'react';
import Modal from '../modal/Modal';
import ArrowUpRight from '../svg/ArrowUpRightSVG';
import DiscordSVG from '../svg/DiscordSVG';
import DiscoverSVG from '../svg/DiscoverSVG';
import LoginSVG from '../svg/LoginSVG';
import LogoSVG from '../svg/LogoSVG';
import MagnifingGlassSVG from '../svg/MaginfingGlassSVG';
import MobileScreenSVG from '../svg/MobileScreenSVG';
import TwitterSVG from '../svg/TwitterSVG';
import VerticalHistorySVG from '../svg/VerticalHistory';
import NewThreadInput from '../NewThreadInput';

function LeftPanel() {
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  return (
    <>
      <aside className='hidden md:block border-borderMain/60 divide-borderMain/60 ring-borderMain bg-transparent'>
        <div className='w-[220px] h-full pt-[12px] pb-sm sticky top-0 flex justify-between flex-col h-full'>
          <div className='grow mt-xs'>
            <div className='flex items-center justify-between mb-md'>
              <a className='block' href='/'>
                <div className='pr-sm pl-md ml-sm pt-xs'>
                  <div className='h-auto group w-28 md:w-36'>
                    <LogoSVG />
                  </div>
                </div>
              </a>
            </div>
            <div className='my-md pt-two'>
              <div>
                <div
                  className='ml-sm'
                  onClick={() => setShowNewThreadModal(true)}
                >
                  <div className='border rounded-full pl-md pr-sm py-sm flex flex-none justify-between items-center mx-md cursor-pointer group ring-2 ring-transparent hover:border-white hover:!ring-super transition duration-300 select-none border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
                    <div className='text-clip overflow-hidden line-clamp-1  light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                      New Thread
                    </div>
                    <div className='flex items-center space-x-two light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                      <div className='font-mono text-bold rounded min-w-5 h-5 flex items-center px-xs justify-center border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                        Ctrl
                      </div>
                      <div className='font-mono text-xs rounded w-5 h-5 flex items-center justify-center border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                        I
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='items-center relative  space-y-sm w-full'>
              <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                <div className='px-sm md overflow-hidden transition duration-300 relative  flex items-center'>
                  <a
                    className='md:hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    href='/'
                  >
                    <div className='flex items-center leading-none justify-start gap-xs'>
                      <MagnifingGlassSVG classes='svg-inline--fa fa-magnifying-glass fa-fw fa-1x' />
                      <div className='text-align-center relative'>Home</div>
                    </div>
                  </a>
                  <div className='absolute z-30 bg-textMain dark:bg-textMainDark'></div>
                </div>
              </div>
              <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                <div className='px-sm md overflow-hidden transition duration-300 relative '>
                  <a
                    className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    href='/discover'
                  >
                    <div className='flex items-center leading-none justify-start gap-xs'>
                      <DiscoverSVG
                        classes={'svg-inline--fa fa-compass fa-fw fa-1x '}
                      />
                      <div className='text-align-center relative'>Discover</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                <div className='px-sm md overflow-hidden transition duration-300 relative '>
                  <button
                    type='button'
                    className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-start gap-xs'>
                      <VerticalHistorySVG
                        classes={
                          'svg-inline--fa fa-rectangle-vertical-history fa-fw fa-1x '
                        }
                      />
                      <div className='text-align-center relative'>Library</div>
                    </div>
                  </button>
                </div>
                <div className='pointer-events-none absolute right-0 md:right-md rounded p-xs bg-alert text-white top-[10px] default text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  New
                </div>
              </div>
              <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                <div className='px-sm md overflow-hidden transition duration-300 relative '>
                  <button
                    type='button'
                    className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-start gap-xs'>
                      <LoginSVG
                        classes={
                          'svg-inline--fa fa-right-to-bracket fa-fw fa-1x '
                        }
                      />
                      <div className='text-align-center relative'>Login</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='ml-md mt-md mr-md hidden md:block'>
              <button
                type='button'
                className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <div className='text-align-center relative'>Sign Up</div>
                </div>
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='px-md pb-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div>
                <div className='inline default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                  Try Pro
                </div>
              </div>
              <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and
                upload more files.
              </div>
              <div className='mt-xs'>
                <div>
                  <button
                    type='button'
                    className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <ArrowUpRight
                        classes={
                          'svg-inline--fa fa-arrow-up-right fa-fw fa-1x '
                        }
                      />
                      <div className='text-align-center relative'>
                        Learn More
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-xs my-sm pt-sm px-sm border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div>
                <button
                  type='button'
                  className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
                >
                  <div className='flex items-center leading-none justify-center gap-xs'>
                    <MobileScreenSVG classes='svg-inline--fa fa-mobile-screen fa-fw fa-1x ' />
                    <div className='text-align-center relative'>Download</div>
                  </div>
                </button>
              </div>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                target='_blank'
                rel='noreferrer'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='https://twitter.com/perplexity_ai'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <TwitterSVG classes='svg-inline--fa fa-x-twitter fa-fw fa-1x ' />
                </div>
              </a>
              <a
                className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                target='_blank'
                rel='noreferrer'
                style={{ WebkitTapHighlightColor: 'transparent' }}
                href='https://discord.gg/perplexity-ai'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <DiscordSVG classes='svg-inline--fa fa-discord fa-fw fa-1x' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </aside>
      <Modal
        showModal={showNewThreadModal}
        setShowModal={setShowNewThreadModal}
        content={<NewThreadInput />}
      />
    </>
  );
}

export default LeftPanel;

import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
import SignUpForm from '../forms/SignUpForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import AiProfileSVG from '../svg/AiProfileSVG';
import Loader from '../Loader';

function SideNav({ selectedNav }) {
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setShowSignUpModal(false);
  }, [user]);
  return loading ? (
    <Loader />
  ) : (
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
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Home' ? 'text-textMain' : 'text-textOff'
                    } dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10`}
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
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Discover'
                        ? 'text-textMain'
                        : 'text-textOff'
                    } dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10`}
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
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Library'
                        ? 'text-textMain'
                        : 'text-textOff'
                    } dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10`}
                    onClick={() => {
                      user ? navigate('/library') : setShowSignUpModal(true);
                    }}
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
              {user ? (
                <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                  <div className='px-sm md overflow-hidden transition duration-300 relative '>
                    <a
                      className={`md:hover:bg-offsetPlus ${
                        selectedNav === 'AI Profile'
                          ? 'text-textMain'
                          : 'text-textOff'
                      } dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      href='/profile'
                    >
                      <div className='flex items-center leading-none justify-start gap-xs'>
                        <AiProfileSVG classes='svg-inline--fa fa-circle-nodes fa-fw fa-1x ' />
                        <div className='text-align-center relative'>
                          AI Profile
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <div className='relative  gap-x-sm  w-full px-two  justify-center'>
                  <div className='px-sm md overflow-hidden transition duration-300 relative '>
                    <button
                      type='button'
                      className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                      onClick={() => setShowSignUpModal(true)}
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
              )}
            </div>
            {!user && (
              <div className='ml-md mt-md mr-md hidden md:block'>
                <button
                  type='button'
                  className='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  onClick={() => {
                    setShowSignUpModal(true);
                  }}
                >
                  <div className='flex items-center leading-none justify-center gap-xs'>
                    <div className='text-align-center relative'>Sign Up</div>
                  </div>
                </button>
              </div>
            )}
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
            {user && (
              <a href='/settings'>
                <div className='px-sm py-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                  <div className='flex  items-center rounded-full gap-x-sm py-xs pl-sm pr-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-transparent md:hover:bg-offsetPlus md:dark:hover:bg-offsetPlusDark'>
                    <div className='relative'>
                      <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-8 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'>
                        <img
                          alt='User avatar'
                          className='w-full h-auto'
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-x-xs relative'>
                        <div className='line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                          {user?.displayName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            )}
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
        key={1}
        showModal={showNewThreadModal}
        setShowModal={setShowNewThreadModal}
        content={<NewThreadInput />}
        classes={'w-[90vw]'}
      />
      <Modal
        key={2}
        showModal={showSignUpModal}
        setShowModal={setShowSignUpModal}
        content={<SignUpForm />}
        classes={'min-w-[600px]'}
        closeButton={true}
      />
    </>
  );
}

SideNav.propTypes = {
  selectedNav: PropTypes.string,
  user: PropTypes.object,
};
export default SideNav;

import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import RightToBracketSVG from '../svg/RightToBracketSVG';
import AiProfileSVG from '../svg/AiProfileSVG';
import DiscoverSVG from '../svg/DiscoverSVG';
import MagnifingGlassSVG from '../svg/MaginfingGlassSVG';
import VerticalHistorySVG from '../svg/VerticalHistory';
import AndroidSVG from '../svg/AndroidSVG';
import FooterLinks from './FooterLinks';
import Modal from '../modal/Modal';
import SignUpForm from '../forms/SignUpForm';

function MobileFooter({ user, selectedNav }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    if (user) setShowSignUpModal(false);
  }, [user]);
  return (
    <>
      {!user ? (
        <div className='md:hidden left-0 fixed z-20 bottom-0 right-0 px-sm pb-sm border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
          <div className='flex items-center gap-x-sm pt-sm pb-md'>
            <a
              className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
              href='https://play.google.com/store/apps/details?id=ai.perplexity.app.android'
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className='flex items-center leading-none justify-center gap-xs'>
                <AndroidSVG classes='svg-inline--fa fa-android fa-fw fa-1x ' />
                <div className='text-align-center relative'>
                  Get Android App
                </div>
              </div>
            </a>
            <button
              type='button'
              className={`bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8`}
              onClick={() => setShowSignUpModal(true)}
            >
              <div className='flex items-center leading-none justify-center gap-xs'>
                <RightToBracketSVG
                  classes={'svg-inline--fa fa-right-to-bracket fa-fw fa-1x '}
                />
                <div className='text-align-center relative'>Login</div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className='md:hidden bottom-0 fixed left-0 right-0 z-20 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
          <div className='px-sm  h-[64px] relative shadow-md border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
            <div className='items-center relative  gap-x-xs flex h-full w-full'>
              <div
                className={`relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center ${
                  selectedNav === 'Home' ? 'border-t-[4px] rounded-b' : ''
                }`}
              >
                <div className='justify-center'>
                  <a
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Home' ? 'text-textMain' : 'text-textOff'
                    } dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8`}
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
              <div
                className={`relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center ${
                  selectedNav === 'Discover' ? 'border-t-[4px] rounded-b' : ''
                }`}
              >
                <div className='justify-center'>
                  <a
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Home' ? 'text-textMain' : 'text-textOff'
                    } dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8`}
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
              <div
                className={`relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center ${
                  selectedNav === 'Library' ? 'border-t-[4px] rounded-b' : ''
                }`}
              >
                <div className='justify-center'>
                  <a
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'Library'
                        ? 'text-textMain'
                        : 'text-textOff'
                    } dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8`}
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
              <div
                className={`relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center ${
                  selectedNav === 'AI Profile' ? 'border-t-[4px] rounded-b' : ''
                }`}
              >
                <div className='justify-center'>
                  <a
                    className={`md:hover:bg-offsetPlus ${
                      selectedNav === 'AI Profile'
                        ? 'text-textMain'
                        : 'text-textOff'
                    } dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    href='/profile'
                  >
                    <div className='flex items-center leading-none flex-col gap-sm'>
                      <AiProfileSVG classes='svg-inline--fa fa-circle-nodes fa-fw fa-lg ' />
                      <div className='text-align-center relative'>
                        AI Profile
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='ml-md mt-md mr-md hidden md:block'></div>
          </div>
        </div>
      )}
      {selectedNav === 'Home' && (
        <div className='md:hidden py-sm px-sm mt-md pb-lg md:pb-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
          <div>
            <div className='flex md:justify-center flex-wrap gap-x-md gap-y-sm px-sm md:px-0 pb-2xl md:pb-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <FooterLinks />
            </div>
          </div>
        </div>
      )}
      <Modal
        key={2}
        showModal={showSignUpModal}
        setShowModal={setShowSignUpModal}
        content={<SignUpForm />}
        classes={'md:min-w-[600px]'}
        closeButton={true}
      />
    </>
  );
}

MobileFooter.propTypes = {
  user: PropTypes.object,
  selectedNav: PropTypes.string,
};
export default MobileFooter;

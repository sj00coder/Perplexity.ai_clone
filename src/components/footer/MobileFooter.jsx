import { useState } from 'react';
import RightToBracketSVG from '../svg/RightToBracketSVG';
import FooterLinks from './FooterLinks';
import Modal from '../modal/Modal';
import SignUpForm from '../forms/SignUpForm';

function MobileFooter() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <>
      <div className='md:hidden left-0 fixed z-20 bottom-0 right-0 px-sm pb-sm border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
        <div className='flex items-center gap-x-sm pt-sm pb-md'>
          <button
            type='button'
            className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
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
      <div className='md:hidden py-sm px-sm mt-md pb-lg md:pb-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
        <div>
          <div className='flex md:justify-center flex-wrap gap-x-md gap-y-sm px-sm md:px-0 pb-2xl md:pb-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
            <FooterLinks />
          </div>
        </div>
      </div>
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

export default MobileFooter;

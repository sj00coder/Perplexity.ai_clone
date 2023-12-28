import { PropTypes } from 'prop-types';
import LogoWithOutText from '../svg/LogoWithoutText';

function Header({ nextButtonText, nextButtonAction, step }) {
  return (
    <div className='xs:mt-md pb-md border-b grid grid-cols-3 mb-lg border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
      <div className='flex items-center gap-x-sm justify-start'>
        <div className=''>
          <div className='h-auto group  w-6 md:w-8'>
            <LogoWithOutText />
          </div>
        </div>
        <div className='default font-sans text-base font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
          Sign Up
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='inline-flex gap-x-sm items-center justify-center rounded-full px-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
          <div
            id='step1'
            className={`rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60  ring-borderMain  ${
              step === 1 ? 'bg-textMain' : 'bg-offset'
            } `}
          ></div>
          <div
            id='step2'
            className={`rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60  ring-borderMain  ${
              step === 2 ? 'bg-textMain' : 'bg-offset'
            } `}
          ></div>
          <div
            id='step3'
            className={`rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60  ring-borderMain  ${
              step === 3 ? 'bg-textMain' : 'bg-offset'
            } `}
          ></div>
        </div>
      </div>
      <div className='flex justify-end'>
        <button
          style={{ WebkitTapHighlightColor: 'transparent' }}
          className='bg-super   text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-base px-md font-medium h-10'
          onClick={nextButtonAction}
        >
          <div className='flex items-center leading-none justify-center gap-xs'>
            <div className='text-align-center relative'>{nextButtonText}</div>
          </div>
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  nextButtonText: PropTypes.string,
  nextButtonAction: PropTypes.func,
  step: PropTypes.number,
};
export default Header;

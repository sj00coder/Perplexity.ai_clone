import XmarkSVG from '../svg/XmarkSVG';
import { PropTypes } from 'prop-types';
function CloseButton({ onClick }) {
  return (
    <button
      type='button'
      className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
      onClick={onClick}
    >
      <div className='flex items-center leading-none justify-center gap-xs'>
        <XmarkSVG classes={'svg-inline--fa fa-xmark fa-fw fa-1x '} />
      </div>
    </button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;

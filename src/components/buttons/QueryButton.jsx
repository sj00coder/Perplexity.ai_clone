import { PropTypes } from 'prop-types';
function QueryButton({ href, text }) {
  return (
    <a href={href}>
      <div className='animate-in fade-in ease-out duration-500 border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
        <div className='md:hidden'>
          <button
            type='button'
            className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <div className='text-align-center relative'>{text}</div>
            </div>
          </button>
        </div>
        <div className='hidden md:block'>
          <button
            type='button'
            className='md:hover:bg-offsetPlus text-textOff  md:hover:text-textMain    font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <div className='text-align-center relative'>{text}</div>
            </div>
          </button>
        </div>
      </div>
    </a>
  );
}

QueryButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default QueryButton;

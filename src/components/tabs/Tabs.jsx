import { PropTypes } from 'prop-types';
function Tabs({ tabElments, slectedTab, setSelectedTab }) {
  return (
    <div className='h-14 lg:hidden border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
      <div className='items-center relative  gap-x-xs flex h-full w-fit justify-center w-full'>
        {tabElments.map((ele) => (
          <div
            key={ele.text}
            className='relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center'
          >
            <div className='justify-center'>
              <button
                type='button'
                onClick={() => setSelectedTab(ele.text)}
                className={`md:hover:bg-offsetPlus ${
                  slectedTab === ele.text ? 'text-textMain' : 'text-textOff'
                }   font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10`}
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  {ele.svg}
                  <div className='text-align-center relative'>{ele.text}</div>
                </div>
              </button>
              {slectedTab === ele.text && (
                <div className='absolute z-30 bottom-0 left-0 right-0 h-1 rounded-t-sm bg-textMain '></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabElments: PropTypes.array,
  slectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func,
};
export default Tabs;

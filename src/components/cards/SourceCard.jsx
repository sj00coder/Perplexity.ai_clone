import { PropTypes } from 'prop-types';
function SourceCard({ text, sourceName, sourceImgUrl, index }) {
  return (
    <div className='flex group items-stretch  w-full relative min-h-[74px]'>
      <div className='rounded px-sm pt-sm pb-xs flex w-full border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-background dark:bg-backgroundDark md:hover:bg-offset md:dark:hover:bg-offsetDark'>
        <div className='relative z-10 flex max-w-full flex-col justify-between h-full pointer-events-none select-none'>
          <div>
            <div className='line-clamp-2 grow default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
              {text}
            </div>
          </div>
          <div className='flex items-center space-x-xs '>
            <div className='flex items-center gap-x-xs border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
              <div className='relative'>
                <div className='rounded-full overflow-hidden'>
                  <img
                    className='block w-[16px] h-[16px]'
                    src={sourceImgUrl}
                    alt={`${sourceName}.com favicon`}
                    width='16'
                    height='16'
                  />
                </div>
              </div>
              <div className=' duration-300 transition-all line-clamp-1 break-all light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                {sourceName}
              </div>
            </div>
            <h2 className='light font-display text-lg font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
              ·
            </h2>
            <div className='light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
              {index}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SourceCard.propTypes = {
  text: PropTypes.string,
  sourceName: PropTypes.string,
  sourceImgUrl: PropTypes.string,
  index: PropTypes.number,
};
export default SourceCard;

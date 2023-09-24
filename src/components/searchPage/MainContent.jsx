import { PropTypes } from 'prop-types';
import SourceSection from './SourceSection';
import AnswerSection from './Answer';
import FollowUpSearchBar from './FollowUpSearchBar';
function MainContent({ searchQuery }) {
  return (
    <div className='w-full h-full mx-auto  max-w-screen-md md:px-lg  px-md'>
      <div className='pt-lg md:pt-0 pb-[124px]'>
        <div className='md:mt-lg border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
          <div className='md:hidden mb-sm'>
            <div className='flex items-center gap-x-md'>
              <div className=' rounded-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <div className='flex items-center gap-x-xs relative'>
                  <div className='relative'>
                    <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-5 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'>
                      <img
                        alt='User avatar'
                        className='w-full h-auto'
                        src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/a147ec00-7615-41c5-087f-2b2b5fba3100/thumbnail'
                      />
                    </div>
                  </div>
                  <div className='line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                    jshubhamofficial1484
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pb-md mb-md border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
            <div className='my-md md:my-lg'>
              <div className='break-words [word-break:break-word] whitespace-pre-line  default font-display text-2xl md:text-3xl font-regular text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                {searchQuery}
              </div>
            </div>
          </div>
          <SourceSection />
          <AnswerSection />
        </div>
      </div>
      <FollowUpSearchBar />
    </div>
  );
}

MainContent.propTypes = {
  searchQuery: PropTypes.string,
};

export default MainContent;

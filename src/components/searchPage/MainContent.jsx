import { PropTypes } from 'prop-types';
import SourceSection from './SourceSection';
import AnswerSection from './Answer';
import FollowUpSearchBar from './FollowUpSearchBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import Loader from '../Loader';
import Avatar from '../Avatar';
import LikeButton from '../buttons/LikeButton';
import MobileFooter from '../footer/MobileFooter';

function MainContent({ searchQuery }) {
  const [user, loading] = useAuthState(auth);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className='w-full h-full mx-auto  max-w-screen-md md:px-lg  px-md'>
        <div className='pt-sm md:pt-0 pb-[124px]'>
          <div className='md:mt-lg border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
            <div className='md:hidden mb-sm'>
              <div className='flex items-center gap-x-md'>
                <Avatar
                  photoUrl={user?.photoURL}
                  displayName={user?.displayName}
                />
                {!user && <LikeButton />}
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
        <div className='z-10 border-t md:border-none bottom-0 md:bottom-lg  py-sm left-0 right-0 fixed md:sticky  justify-center px-sm md:p-0 md:pt-xl animate-in slide-in-from-bottom-4 duration-300 ease-out md:flex md:justify-center md:bottom-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background2'>
          <FollowUpSearchBar />
          <MobileFooter user={user} />
        </div>
      </div>
    </>
  );
}

MainContent.propTypes = {
  searchQuery: PropTypes.string,
};

export default MainContent;

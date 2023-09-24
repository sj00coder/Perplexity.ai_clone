import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../Firebase';
import SideNav from '../components/sideNav/SideNav';
import Header from '../components/searchPage/Header';
import MainContent from '../components/searchPage/MainContent';
import { getSearchQuery } from '../utils/searchQuery';
import Loader from '../components/Loader';

function Search() {
  const { searchId } = useParams();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!getSearchQuery(searchId)) throw new Error('Page not found');
  }, [searchId]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className='h-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'>
        <div className='flex h-[100vh]'>
          <SideNav />
          <div className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
            <div className='lg:rounded-lg shadow-sm md:dark:border h-full overflow-clip bg-clip-border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
              <div className='h-full overflow-x-hidden overflow-y-auto'>
                <Header user={user} />
                <MainContent searchQuery={getSearchQuery(searchId)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

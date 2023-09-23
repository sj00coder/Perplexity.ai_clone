import Header from '../components/libraryPage/Header';
import MainSection from '../components/libraryPage/MainSection';
import SideNav from '../components/sideNav/SideNav';

function Library() {
  return (
    <div className='flex min-h-[100vh]'>
      <SideNav selectedNav='Library' />
      <div className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
        <div className='lg:rounded-lg shadow-sm md:dark:border h-full overflow-clip bg-clip-border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
          <div className='h-full'>
            <Header />
            <MainSection />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Library;

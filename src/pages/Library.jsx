import Header from '../components/libraryPage/Header';
import MainSection from '../components/libraryPage/MainSection';
import SideNav from '../components/sideNav/SideNav';

function Library() {
  return (
    <div className='flex min-h-[100vh]'>
      <SideNav selectedNav='Library' />
      <div className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
        <div className='lg:rounded-lg shadow-sm  h-full overflow-clip bg-clip-border border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
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

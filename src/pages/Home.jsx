import LeftPanel from '../components/homePage/LeftPanel';

const Home = () => {
  return (
    <div className='flex min-h-[100vh]'>
      <LeftPanel />
      <aside className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
        THis is right panel
      </aside>
    </div>
  );
};

export default Home;

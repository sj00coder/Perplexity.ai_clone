import LeftPanel from '../components/homePage/LeftPanel';
import MainSection from '../components/homePage/MainSection';

const Home = () => {
  return (
    <div className='flex min-h-[100vh]'>
      <LeftPanel />
      <MainSection />
    </div>
  );
};

export default Home;

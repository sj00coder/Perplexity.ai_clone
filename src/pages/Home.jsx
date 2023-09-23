import MainSection from '../components/homePage/MainSection';
import SideNav from '../components/sideNav/SideNav';

const Home = () => {
  return (
    <div className='flex min-h-[100vh]'>
      <SideNav selectedNav='Home' />
      <MainSection />
    </div>
  );
};

export default Home;

import { useAuthState } from 'react-firebase-hooks/auth';
import MainSection from '../components/homePage/MainSection';
import SideNav from '../components/sideNav/SideNav';
import Loader from '../components/Loader';
import { auth } from '../Firebase';

const Home = () => {
  const [, loading] = useAuthState(auth);
  return loading ? (
    <Loader />
  ) : (
    <div className='flex min-h-[100vh]'>
      <SideNav selectedNav='Home' />
      <MainSection />
    </div>
  );
};

export default Home;

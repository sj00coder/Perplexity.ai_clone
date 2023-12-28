import { logout } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const navigate = useNavigate('/');
  const logOutAndNavigate = () => {
    logout();
    navigate('/');
  };
  return (
    <div className='flex h-[100vh] justify-center items-center'>
      <div className='w-[20vw]'>
        <button
          type='button'
          className='bg-superDuper md:hover:bg-offsetPlus text-white  md:hover:text-textMain    font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-start rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10 w-100'
          onClick={logOutAndNavigate}
        >
          <div className='flex items-center leading-none justify-start gap-xs'>
            <div className='text-align-center relative'>Logout</div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Setting;

import { useRouteError } from 'react-router-dom';
import { PropTypes } from 'prop-types';
export default function ErrorPage({ errorMessage }) {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex text-center w-full h-[100vh] items-center justify-center'>
      <div className='w-full'>
        <h1 className='text-2xl font-bold'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='mt-3'>
          <i className='text-orange'>
            {errorMessage || error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  errorMessage: PropTypes.string,
};

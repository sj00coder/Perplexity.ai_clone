import { useAuthState } from 'react-firebase-hooks/auth';
import { PropTypes } from 'prop-types';

import { auth } from '../Firebase';
import Loader from './Loader';
import ErrorPage from '../pages/ErrorPage';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  return loading ? (
    <Loader />
  ) : (
    <>
      {user ? (
        <>{children}</>
      ) : (
        <ErrorPage errorMessage='You are not authorised' />
      )}
    </>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};
export default ProtectedRoute;

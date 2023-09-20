import PropTypes from 'prop-types';

function MobileScreenSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='mobile-screen'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 384 512'
    >
      <path
        fill='currentColor'
        d='M64 464H320V368H64v96zm0-144H320V48H64V320zM16 0H64 320h48V48 464v48H320 64 16V464 48 0zM160 400h64 16v32H224 160 144V400h16z'
      ></path>
    </svg>
  );
}
MobileScreenSVG.propTypes = {
  classes: PropTypes.string,
};
export default MobileScreenSVG;

import PropTypes from 'prop-types';

function ArrowRightToArcSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='arrow-right-to-arc'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M232.3 134.4l112 104L363.3 256l-18.9 17.6-112 104-17.6 16.3-32.7-35.2 17.6-16.3L266.9 280 24 280 0 280l0-48 24 0 242.9 0-67.2-62.4-17.6-16.3 32.7-35.2 17.6 16.3zM464 256c0-114.9-93.1-208-208-208l-24 0 0-48 24 0C397.4 0 512 114.6 512 256s-114.6 256-256 256l-24 0 0-48 24 0c114.9 0 208-93.1 208-208z'
      ></path>
    </svg>
  );
}
ArrowRightToArcSVG.propTypes = {
  classes: PropTypes.string,
};
export default ArrowRightToArcSVG;

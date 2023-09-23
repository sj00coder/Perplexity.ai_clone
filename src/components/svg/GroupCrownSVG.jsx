import PropTypes from 'prop-types';

function GroupCrownSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='user-group-crown'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'
    >
      <path
        fill='currentColor'
        d='M96 0l48 24 16 8L224 0l64 32 16-8L352 0V53.7 144c0 70.7-57.3 128-128 128s-128-57.3-128-128V53.7 0zm48 144c0 44.2 35.8 80 80 80s80-35.8 80-80V128H144v16zM65 464H383L348.5 352H99.5L65 464zM64 304H384l49.2 160L448 512H397.8 50.2 0l14.8-48L64 304zM640 512H481.5l-2.9-9.4L422.4 320H576l64 192zM432 256c-27.7 0-53-10.1-72.6-26.7C375 204.6 384 175.4 384 144V53.7 42.8C398.5 35.9 414.8 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z'
      ></path>
    </svg>
  );
}
GroupCrownSVG.propTypes = {
  classes: PropTypes.string,
};
export default GroupCrownSVG;
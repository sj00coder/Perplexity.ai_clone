import PropTypes from 'prop-types';

function XmarkSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='xmark'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 384 512'
    >
      <path
        fill='currentColor'
        d='M345 137l17-17L328 86.1l-17 17-119 119L73 103l-17-17L22.1 120l17 17 119 119L39 375l-17 17L56 425.9l17-17 119-119L311 409l17 17L361.9 392l-17-17-119-119L345 137z'
      ></path>
    </svg>
  );
}
XmarkSVG.propTypes = {
  classes: PropTypes.string,
};
export default XmarkSVG;

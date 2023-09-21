import PropTypes from 'prop-types';

function RightToBracketSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='right-to-bracket'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M128 224l48 0 0-48 0-28.1L284.1 256 176 364.1l0-28.1 0-48-48 0-80 0 0-64 80 0zm190.1-1.9L192 96l-16 0-48 0 0 32 0 16 0 32-48 0-32 0L0 176l0 48 0 64 0 48 48 0 32 0 48 0 0 32 0 16 0 32 48 0 16 0L318.1 289.9 352 256l-33.9-33.9zM344 432l-24 0 0 48 24 0 144 0 24 0 0-24 0-400 0-24-24 0L344 32l-24 0 0 48 24 0 120 0 0 352-120 0z'
      ></path>
    </svg>
  );
}
RightToBracketSVG.propTypes = {
  classes: PropTypes.string,
};
export default RightToBracketSVG;

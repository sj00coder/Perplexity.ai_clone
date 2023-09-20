import PropTypes from 'prop-types';

function DiscoverSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='compass'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM128 384l64-192 192-64L320 320 128 384zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'
      ></path>
    </svg>
  );
}
DiscoverSVG.propTypes = {
  classes: PropTypes.string,
};
export default DiscoverSVG;

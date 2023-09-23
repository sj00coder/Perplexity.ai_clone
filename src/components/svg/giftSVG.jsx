import PropTypes from 'prop-types';

function GiftSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='gift'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M231.9 44.4C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88c0 14.4 3.5 28 9.6 40H48 0v48 64 48H32V464v48H80 432h48V464 288h32V240 176 128H464 438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41zM464 176v64H432 288V176h72H464zm-240 0v64H80 48V176H152h72zm0 112V464H80V288H224zm64 176V288H432V464H288zm72-336H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-136 0H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8L225.3 128H224z'
      ></path>
    </svg>
  );
}
GiftSVG.propTypes = {
  classes: PropTypes.string,
};
export default GiftSVG;

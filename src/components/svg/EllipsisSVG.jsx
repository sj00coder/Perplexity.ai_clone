import PropTypes from 'prop-types';

function EllipsisSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='ellipsis'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
    >
      <path
        fill='currentColor'
        d='M24 296l0-80 80 0 0 80-80 0zm160 0l0-80 80 0 0 80-80 0zm160-80l80 0 0 80-80 0 0-80z'
      ></path>
    </svg>
  );
}
EllipsisSVG.propTypes = {
  classes: PropTypes.string,
};
export default EllipsisSVG;

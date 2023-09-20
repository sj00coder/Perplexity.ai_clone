import PropTypes from 'prop-types';

function VerticalHistorySVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='rectangle-vertical-history'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 576 512'
    >
      <path
        fill='currentColor'
        d='M240 48V464H528V48H240zM192 0h48H528h48V48 464v48H528 240 192V464 48 0zM96 48h48V464H96V48zM0 96H48V416H0V96z'
      ></path>
    </svg>
  );
}
VerticalHistorySVG.propTypes = {
  classes: PropTypes.string,
};
export default VerticalHistorySVG;

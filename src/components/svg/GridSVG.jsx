import PropTypes from 'prop-types';

function GridSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='grid-2'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M80 80v96h96V80H80zM32 32H80h96 48V80v96 48H176 80 32V176 80 32zM80 336v96h96V336H80zM32 288H80h96 48v48 96 48H176 80 32V432 336 288zM432 80H336v96h96V80zM336 32h96 48V80v96 48H432 336 288V176 80 32h48zm0 304v96h96V336H336zm-48-48h48 96 48v48 96 48H432 336 288V432 336 288z'
      ></path>
    </svg>
  );
}
GridSVG.propTypes = {
  classes: PropTypes.string,
};
export default GridSVG;
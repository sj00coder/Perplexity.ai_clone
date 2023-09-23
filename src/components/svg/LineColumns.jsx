import PropTypes from 'prop-types';

function LinerColumnSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='line-columns'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M24 40H200h24V88H200 24 0V40H24zm0 128H200h24v48H200 24 0V168H24zM0 296H24 200h24v48H200 24 0V296zM24 424H200h24v48H200 24 0V424H24zM288 168h24H488h24v48H488 312 288V168zM312 40H488h24V88H488 312 288V40h24zM288 296h24H488h24v48H488 312 288V296zm24 128H488h24v48H488 312 288V424h24z'
      ></path>
    </svg>
  );
}
LinerColumnSVG.propTypes = {
  classes: PropTypes.string,
};
export default LinerColumnSVG;

import PropTypes from 'prop-types';

function CirclePlusSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='circle-plus'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 368h48V344 280h64 24V232H344 280V168 144H232v24 64H168 144v48h24 64v64 24z'
      ></path>
    </svg>
  );
}
CirclePlusSVG.propTypes = {
  classes: PropTypes.string,
};
export default CirclePlusSVG;

import PropTypes from 'prop-types';

function PlusSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='plus'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
    >
      <path
        fill='currentColor'
        d='M248 72V48H200V72 232H40 16v48H40 200V440v24h48V440 280H408h24V232H408 248V72z'
      ></path>
    </svg>
  );
}
PlusSVG.propTypes = {
  classes: PropTypes.string,
};
export default PlusSVG;

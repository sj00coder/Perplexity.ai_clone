import PropTypes from 'prop-types';

function ArrowUpRight({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='arrow-up-right'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 384 512'
    >
      <path
        fill='currentColor'
        d='M328 96h24v24V360v24H304V360 177.9L81 401l-17 17L30.1 384l17-17 223-223H88 64V96H88 328z'
      ></path>
    </svg>
  );
}
ArrowUpRight.propTypes = {
  classes: PropTypes.string,
};
export default ArrowUpRight;

import PropTypes from 'prop-types';

function InfinitySVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='infinity'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'
    >
      <path
        fill='currentColor'
        d='M0 96H24 192h10.4l7.1 7.6L320 221 430.5 103.6l7.1-7.6H448 616h24v24V392v24H616 448 437.6l-7.1-7.6L320 291 209.5 408.4l-7.1 7.6H192 24 0V392 120 96zM287 256L181.6 144H48V368H181.6L287 256zm65.9 0L458.4 368H592V144H458.4L353 256z'
      ></path>
    </svg>
  );
}
InfinitySVG.propTypes = {
  classes: PropTypes.string,
};
export default InfinitySVG;

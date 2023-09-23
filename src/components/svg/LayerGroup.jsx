import PropTypes from 'prop-types';

function LayerGroupSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='layer-group'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 576 512'
    >
      <path
        fill='currentColor'
        d='M288 203.5L118.2 128 288 52.5 457.8 128 288 203.5zM516.9 101.7L288 0 59.1 101.7 0 128l59.1 26.3L288 256 516.9 154.3 576 128l-59.1-26.3zm-353.2 134l-59.1-26.3L59.1 229.7 0 256l59.1 26.3L288 384 516.9 282.3 576 256l-59.1-26.3-45.5-20.2-59.1 26.3L457.8 256 288 331.5 118.2 256l45.5-20.2zM104.6 337.5L59.1 357.7 0 384l59.1 26.3L288 512 516.9 410.3 576 384l-59.1-26.3-45.5-20.2-59.1 26.3L457.8 384 288 459.5 118.2 384l45.5-20.2-59.1-26.3z'
      ></path>
    </svg>
  );
}
LayerGroupSVG.propTypes = {
  classes: PropTypes.string,
};
export default LayerGroupSVG;

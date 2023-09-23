import PropTypes from 'prop-types';

function FilesSVG({ classes }) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fasr'
      data-icon='files'
      className={classes}
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
    >
      <path
        fill='currentColor'
        d='M144 368H400V128H320V48H144V368zM352 0l96 96V368v48H400 144 96V368 48 0h48H352zM48 96v24V464H328h24v48H328 24 0V488 120 96H48z'
      ></path>
    </svg>
  );
}
FilesSVG.propTypes = {
  classes: PropTypes.string,
};
export default FilesSVG;

import { PropTypes } from 'prop-types';
function SvgTextCard({ svg, heading, text }) {
  return (
    <div className='flex items-baseline gap-x-md'>
      <div className='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
        {svg}
      </div>
      <div>
        <div className='default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          {heading}
        </div>
        <div className='light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
          {text}
        </div>
      </div>
    </div>
  );
}

SvgTextCard.propTypes = {
  svg: PropTypes.element,
  heading: PropTypes.string,
  text: PropTypes.string,
};
export default SvgTextCard;

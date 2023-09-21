import { PropTypes } from 'prop-types';
function LinkButton({ href, text, externalLink, colorSuper }) {
  return (
    <a href={href} target={externalLink ? '_blank' : '_self'} rel='noreferrer'>
      <div
        className={`hover:underline font-sans text-sm ${
          colorSuper ? 'text-super' : 'text-textOff'
        } dark:text-superDark selection:bg-superDuper selection:text-textMain`}
      >
        {text}
      </div>
    </a>
  );
}

LinkButton.propTypes = {
  externalLink: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string,
  colorSuper: PropTypes.bool,
};

export default LinkButton;

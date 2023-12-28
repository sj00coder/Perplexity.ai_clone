import CloseButton from '../buttons/CloseButton';
import Backdrop from './Backdrop';
import { PropTypes } from 'prop-types';

function handleModalChildClick(e) {
  e.stopPropagation();
}
function Modal({ showModal, setShowModal, content, classes, closeButton }) {
  return (
    <>
      {showModal ? (
        <>
          <Backdrop setShowModal={setShowModal} />

          <div
            className='flex justify-center fixed top-0 left-0 bottom-0 right-0 z-20 items-center'
            onClick={() => setShowModal(false)}
          >
            <div className='animate-in fade-in zoom-in-95 duration-300 z-100'>
              <div
                className={`${classes} max-w-screen-md p-md md:rounded-xl shadow-md relative border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offset `}
                onClick={handleModalChildClick}
              >
                {closeButton && (
                  <div className='fixed z-[22] md:absolute top-sm right-sm'>
                    <CloseButton onClick={() => setShowModal(false)} />
                  </div>
                )}
                {content}
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  content: PropTypes.element,
  classes: PropTypes.string,
  closeButton: PropTypes.bool,
};

export default Modal;

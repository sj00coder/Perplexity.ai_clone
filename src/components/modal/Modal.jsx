import Backdrop from './Backdrop';
import { PropTypes } from 'prop-types';

function handleModalChildClick(e) {
  e.stopPropagation();
}
function Modal({ showModal, setShowModal, content }) {
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
                className='max-w-screen-md w-[90vw] p-md rounded-xl shadow-md relative border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark'
                onClick={handleModalChildClick}
              >
                {/* <NewThreadInput /> */}
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
};

export default Modal;

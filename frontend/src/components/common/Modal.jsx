import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { memo, useEffect, useRef } from 'react';

const Modal = memo(({ isOpen, onClose, title, children, className = '' }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl ${className}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 id="modal-title" className="text-xl font-semibold text-gray-900">{title}</h3>
              <button onClick={onClose} className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700" aria-label="Close dialog">
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Modal.displayName = 'Modal';

export default Modal;

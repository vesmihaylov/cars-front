import React from "react";
import { Modal } from "bootstrap";

function Popup({ show, onClose, title, message }) {
  const modalRef = React.useRef();

  React.useEffect(() => {
    const modalElement = modalRef.current;
    const modal = new Modal(modalElement);

    if (show) {
      modal.show();
    } else {
      modal.hide();
    }

    return () => {
      modal.dispose();
    };
  }, [show]);

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">&#128664; {title} &#128678;</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message} &#127881;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;

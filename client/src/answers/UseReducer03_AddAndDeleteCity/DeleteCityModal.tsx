import React from 'react';

function DeleteCityModal({
  id,
  deleteCity,
  hideModal,
}: {
  id: number;
  deleteCity: (id: number) => void;
  hideModal: () => void;
}): JSX.Element {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Deleting a city</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={hideModal}
            />
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete the city?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger confirm-delete"
              data-bs-dismiss="modal"
              onClick={() => deleteCity(id)}
            >
              {' '}
              Delete
            </button>
            <button
              onClick={hideModal}
              type="button"
              className="btn btn-secondary cancel-delete"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCityModal;

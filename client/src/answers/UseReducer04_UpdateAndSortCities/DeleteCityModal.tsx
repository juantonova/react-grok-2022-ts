import React from 'react';

function DeleteCityModal({
  deleteCity,
  hideDeleteModal,
  id,
}: {
  deleteCity: (id: number) => void;
  hideDeleteModal: () => void;
  id: number;
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
              onClick={hideDeleteModal}
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
              onClick={hideDeleteModal}
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

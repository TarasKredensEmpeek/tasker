import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const IncorrectTitle = ({ onCloseAlert, onConfirmAlert }) => (
  <div className="alert-wrap">
    <div id="alert-title-uncorrect">
      <span className="close-alert" onClick={onCloseAlert} title="Close">
        {' '}
        ×{' '}
      </span>
      <span className="warning-mess">WARNING!</span>
      <h4>
        Please check the value of the 'Title' field. This field should not be
        empty!
      </h4>
      <button
        className="confirm-button"
        id="confirm-btn"
        title="Close"
        onClick={onConfirmAlert}
      >
        OK
      </button>
    </div>
  </div>
);

export default IncorrectTitle;

import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorModal.css';
import Card from './Card';

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onValid={props.onValid} />,
        document.getElementById('error-backdrop')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onValid={props.onValid}
        />,
        document.getElementById('error-overlay')
      )}
    </>
  );
}

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onValid}></div>;
}

function Overlay(props) {
  return (
    <Card className="error-modal">
      <header className="error-header">
        <h2>{props.title}</h2>
      </header>
      <section className="error-section">
        <p>{props.message}</p>
      </section>
      <footer className="error-footer">
        <button type="submit" onClick={props.onValid}>
          Okay
        </button>
      </footer>
    </Card>
  );
}

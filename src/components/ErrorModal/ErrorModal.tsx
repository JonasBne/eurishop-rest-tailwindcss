import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import Backdrop from './Backdrop';
import Overlay from './Overlay';
import Button from '../Button';

interface ErrorModalProps {
  name: string;
  message: string;
}

function ErrorModal({ name, message }: ErrorModalProps) {
  const navigate = useNavigate();

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.body)}
      {ReactDOM.createPortal(
        <Overlay>
          <div className="flex flex-col" role="alert">
            <h4>{name}</h4>
            <span className="text-center">
              The following problem occured:
              {message}
            </span>
            <Button variant="danger" className="py-2 px-4" onClick={() => navigate('/home')}>
              Return home
            </Button>
          </div>
        </Overlay>,
        document.body,
      )}
    </>
  );
}

export default ErrorModal;

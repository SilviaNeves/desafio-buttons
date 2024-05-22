import React, {  } from 'react';
import './Button.css';
import './InputComponent.jsx';

const Button = ({ value, onChange, buttonState, className,onClick }) => {
    const handleClick = () => {
      if (buttonState !== 'desativado') {
        onChange();
      }
    };

    let buttonText = value;
    let buttonClass = '';

    switch (buttonState) {
      case 'loading':
        buttonText = 'Carregando...';
        buttonClass = 'loading-button';
        break;
        default:
        buttonClass = 'normal-button';
    }

    return (
      <div>
        <button
            onClick={handleClick}
            disabled={buttonState === 'desativado'}
            className={buttonClass}
        >
            {buttonText}
        </button>
      </div>
    );
};

export default Button;

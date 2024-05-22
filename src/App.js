import React, { useState } from 'react';
import Button from './components/Button.jsx';
import InputComponent from './components/InputComponent.jsx';

const App = () => {
    const [buttonState, setButtonState] = useState('normal');
    const [isButton1Active, setButton1Active] = useState(false);
    const [isButton2Select, setButton2Select] = useState(false);
    const [name, setName] = useState("");

    const handleButtonClick = () => {
        if (buttonState === 'normal' && !isButton1Active) {
            setButtonState('loading');// Simula o carregamento
            setTimeout(() => {
                setButtonState('normal');
            }, 2000); 
        }
    }; 
    
    const handleButton1Click = () => {
        setButton1Active(!isButton1Active);
    };

    const handleButton2Click = () => {
        if (!isButton1Active) {
        setButton2Select(!isButton2Select); 
        if (isButton2Select) {
            setName("");
        }
    }
};

const handleInputChange = (event) => {
    setName(event.target.value);
};

    return (
        <div className="App">
            <h1> My App</h1>
    <Button value="Clique Aqui" onChange={handleButtonClick} buttonState={buttonState}
    disabled={isButton1Active || isButton2Select } className={buttonState === 'loading' ? 'loading-button' : 'normal-button'}/>

    <button onClick={handleButton1Click} className={isButton1Active ? 'active-button' : 'inactive-button'}>
        {isButton1Active ? 'Desbloquear' : 'Bloquear'}
            </button>

    <button onClick={handleButton2Click} disabled={isButton1Active} className={isButton2Select ?  'select-button' : 'deselect-button' }>
        {isButton2Select ? 'Limpar' : 'Selecionar '}
            </button>  
        {isButton2Select && <InputComponent value={name} className='input' disabled={isButton1Active || buttonState } onChange={handleInputChange} />} 
        <p className='text'> Clique em Selecionar e se apresente como membro da família Campinho Digital! <br />
        {name} </p>
        </div>
    );
}
export default App;

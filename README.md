# desafio-buttons

### Desafio React: Criar um Componente de Botão com Vários Estados
Seu objetivo é criar um componente de botão em React com os seguintes estados:

https://github.com/campinho-digital/desafio-buttons/assets/108235987/e7d3e948-735b-492f-9ecf-8ac5bec89d12

Normal: O estado padrão do botão.
Loading: O botão entra em um estado de carregamento quando estiver processando alguma ação.
Desativado: O botão fica desativado e não pode ser clicado.
Selecionado: O botão muda seu estilo quando estiver selecionado.


Passos:
1 - Crie um novo projeto React usando create-react-app (ou qualquer método que preferir).

2 - No componente principal (App.js), crie um estado para gerenciar o seu botão.

3 - Crie um componente de botão (Button.jsx) que receba props para o valor e a função de mudança.

4 - No componente principal (App), utilize o Button e passe as props necessárias.

Sua estrutura de arquivos deverá ser assim:

~~~
src/
|-- components/
|   |-- Button
|   |-- |-- Button.jsx
|   |-- |-- Button.css
|-- App.js
|-- index.js
~~~



## O `src/components/Button.jsx`

~~~
import React from 'react';
import './Button.css';

const Button = ({ loading, disabled, selected, onClick, onToggleDisable, onToggleSelected }) => {
  return (
  //seu código
  );
};

export default Button;

~~~

## O `src/components/Button.css`

~~~
.button-container {
    //código
  }
  
.button {
   //código
  }  

~~~


## O `src/App.js`
~~~
import React, { useState } from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    // Simular uma ação de carregamento
  };

//outras lógicas

  return (

  <div>
      <h1>Meu App</h1>
      <Button
        loading={loading}
        disabled={disabled}
        selected={selected}
        onClick={handleClick}
        onToggleDisable={handleToggleDisable}
        onToggleSelected={handleToggleSelected}
      />
    </div>
  );
}

export default App;

~~~


Os dumbs Components: https://medium.com/@adson.martins982/smart-e-dumb-components-maximizando-a-efici%C3%AAncia-do-desenvolvimento-front-end-817acd6f36f1

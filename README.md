# React-JS Sidebar Modal Component App with useContext Hook

<br />

O projeto renderiza dois componentes, sendo o principal um componente de Sidebar. O outro é um Modal. Ambos são renderizados de forma condicional, podendo ser apresentados ou escondidos da visão do usuário.

<br />

**De forma mais específica, o app se utiliza neste projeto do React Hook UseContext para criar um contexto de escopo que envelopa o modulo do app de modo a poder ser usado como uma unidade ou módulo que vai distribuir variáveis e funções para serem usadas por qualquer componente que precise de tais valores.**

<br />

Dessa maneira, por meio dos valores contralados por UseContext os componentes se utilizam para definir a renderização condicionada de seus próprios elementos.

<br />

#### React Project (the 15 Projects) - Freecodecamp.org

Conjunto de projetos de frontend inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento do framework React-JS e JavaScript. [^1]

<br />

[]()

<br />

### Imagem apresentando os valores globais de estado das variáveis por padrão, que é falso, de modo que inicialmente Sidebar e Modal permanecem escondidos, não sendo renderizados:

![Imagem apresentando os valores globais de estado das variáveis por padrão](/public/images/aprensentação-do-contexto-padrão-do-app.png)

<br />

### Imagem apresentando o estado global da variável isSidebarOpen responsável pelo controle de renderização do componente Sidebar:

![Imagem apresentando o estado global da variável isSidebarOpen](/public/images/apresentando-variável-de-contexto-global-isSidebarOpen.png)

<br />

### Imagem apresentando o estado global da variável isModalOpen responsável pelo controle de renderização do componente Modal:

![Imagem apresentando o estado global da variável isModalOpen](/public/images/apresentando-variável-de-contexto-global-isModalOpen.png)

<br />

Abaixo temos um código de exemplo do módulo de contexto para a aplicação, que cria componentes para controlar valores e funções para toda e qualquer parte da aplicação App.js:

<br />

```
import React, { useState, useContext } from 'react'


const AppContext = React.createContext();


/*
    Atenção: usar o objeto Children é essencial para se alcançar os demais componentes.
*/
const AppProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);


    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };



    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
    }}>{children}</AppContext.Provider>
};


// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};



export { AppContext, AppProvider }

```

<br />

E já no script a seguir, vemos como o componente criado para controlar o contexto, **<AppProvider>**, envelopa toda a aplicação em seu ponto de entrada:

<br />

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProvider } from './context';
import App from './App'



/*
  Lembrando que AppProvider teve de receber o obj Children como param e retorná-lo também, a partir desse momento todo todos os componentes de App.js podem acessar os valores controlados por AppProvider.....
*/
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

```

<br />
<br />

[^1] John Smilga - Freecodecamp.org.

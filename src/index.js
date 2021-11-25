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



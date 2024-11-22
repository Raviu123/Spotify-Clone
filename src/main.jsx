import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//to use react router we need to import the below one
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>   
    </BrowserRouter>
  </React.StrictMode>,
)

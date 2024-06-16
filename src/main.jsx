import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './assets/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Header/>
    <Footer></Footer>
    </>
  </React.StrictMode>,
)

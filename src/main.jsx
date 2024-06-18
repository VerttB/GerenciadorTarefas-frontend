import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import CadastroLogin from './components/Forms.jsx'
import './assets/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    
      <Header/>
      {/* <Login></Login> */}
      {/* <Cadastro></Cadastro> */}
      <CadastroLogin></CadastroLogin>
      {/* <Footer></Footer> */}
    </>
  </React.StrictMode>,
)

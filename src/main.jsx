import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import CadastroLogin from './components/Forms.jsx'
import TaskCard from './components/TaskCard.jsx'
import './assets/styles/reset.scss'


const task =[{
  nome: "Andar",
  descricao:"Andar bastante",
  status:"Pendente",
  data: "12/30/2004"
},{
  nome: "Caminhar",
  descricao:"Caminhar bastante",
  status:"Pendente",
  data: "12/30/2004"
},
{
  nome: "Kaik",
  descricao:"Caminhar bastante",
  status:"Pendente",
  data: "12/30/2004"
}
]

ReactDOM.createRoot(document.getElementById('root')).render(

 

  <React.StrictMode>
    <>
    
      <Header/>
      <TaskCard tasks={task}></TaskCard>
      <Footer></Footer>
      {/* <Login></Login> */}
      {/* <Cadastro></Cadastro> */}
      {/* <CadastroLogin></CadastroLogin> */}
    </>
  </React.StrictMode>,
)

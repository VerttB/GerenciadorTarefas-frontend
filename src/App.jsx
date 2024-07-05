import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route , Routes,  Navigate} from "react-router-dom"
import CadastroLogin from "./paginas/CadastroLogin/CadastroLogin"
import Sobre from "./paginas/Sobre/Sobre"
import Inicio from "./paginas/Inicio/Inicio"
import Atividades from "./paginas/Atividades/Atividades"
import React, {useState} from 'react'

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
    descricao:"Parar de Bagunçar",
    status:"Pendente",
    data: "12/30/2004"
  },
  {nome: "Leticia",
  descricao:"Estudar Node.Js",
  status:"Pendente",
  data: "12/30/2004"
  },
  {nome: "Cainan",
    descricao:"Fazer Grafos",
    status:"Em Andamento",
    data: "12/30/2004"
    },
  {nome: "Cainan",
      descricao:"Fazer Grafos",
      status:"Em Andamento",
      data: "12/30/2004"
      }
  ]

function App(){

    const [user, setUser] = useState('');

    return(
    <BrowserRouter>
    <Header></Header>
     <Routes>
        <Route path='/inicio' element={<Inicio></Inicio>}/>
        <Route path='/cadastro' element={<CadastroLogin login={false}></CadastroLogin>}/>
        <Route path='/login' element={<CadastroLogin login={true}></CadastroLogin>}/>
        <Route path='/atividades' element={<Atividades user={user} tasks={task}></Atividades>}/>
        <Route path='/sobre' element={<Sobre></Sobre>}/>
        <Route path="*" element={<Navigate to="/inicio" />} />
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    )
}

export default App
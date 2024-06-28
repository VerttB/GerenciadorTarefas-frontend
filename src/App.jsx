import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import CadastroLogin from "./components/Forms/Forms"
import TaskCard from "./components/TaskCard/TaskCard"

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

    return(
    <>
     <Header></Header>
     <CadastroLogin></CadastroLogin>
     <Footer></Footer>
    </>
    )
}

export default App
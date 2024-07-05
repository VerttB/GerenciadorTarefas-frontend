import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route , Routes,  Navigate} from "react-router-dom"
import CadastroLogin from "./paginas/CadastroLogin/CadastroLogin"
import Sobre from "./paginas/Sobre/Sobre"
import Inicio from "./paginas/Inicio/Inicio"
import TaskCard from "./components/TaskCard/TaskCard"

function App(){
    return(
    <BrowserRouter>
    <Header></Header>
     <Routes>
        <Route path='/inicio' element={<Inicio></Inicio>}/>
        <Route path='/cadastro' element={<CadastroLogin></CadastroLogin>}/>
        <Route path='/login' element={<CadastroLogin></CadastroLogin>}/>
        <Route path='/atividades' element={<TaskCard tasks={task}></TaskCard>}/>
        <Route path='/sobre' element={<Sobre></Sobre>}/>
        <Route path="*" element={<Navigate to="/inicio" />} />
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    )
}

export default App
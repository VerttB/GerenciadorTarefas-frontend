import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route , Routes,  Navigate} from "react-router-dom"
import Forms from "./paginas/CadastroLogin/Forms"
import Sobre from "./paginas/Sobre/Sobre"
import Inicio from "./paginas/Inicio/Inicio"
import Atividades from "./paginas/Atividades/Atividades"
import React, {useState} from 'react'
import Perfil from "./paginas/Perfil/Perfil"

function App(){



    const [user, setUser] = useState({ userId: 1, nome: "Bacana", email: '123@gmai.com'})
        

    return(
    <BrowserRouter>
    <Header user={user}></Header>
     <Routes>
        <Route path='/inicio' element={<Inicio></Inicio>}/>
        <Route path='/cadastro' element={<Forms setUser={setUser} changeUser={setUser} login={false}></Forms>}/>
        <Route path='/login' element={<Forms setUser={setUser} login={true}></Forms>}/>
        <Route path='/atividades' element={<Atividades user={user} ></Atividades>}/>
        <Route path='/sobre' element={<Sobre></Sobre>}/>
        <Route path='/perfil' element={<Perfil user={user}></Perfil>}/>
        <Route path="*" element={<Navigate to="/inicio" />} />
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    )
}

export default App
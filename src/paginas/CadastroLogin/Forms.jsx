import Login from "src/components/Login/Login";
import Cadastro from "src/components/Login/Cadastro";
import {redirect, Link, useLocation} from 'react-router-dom'
import React, { useState, createContext, useEffect } from "react";

import './forms.scss';



function Forms({setUser}){
    const local = useLocation();
    console.log(local.pathname === '/login' ? false : true);
    const [disable, setDisable] = useState(false);
    const [titulo, setTitulo] = useState('Cadastre-se');
    const [descricao, setDescricao] = useState("Ainda não possui conta? Clique aqui para criar");

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    function handleDisable(){
        setDisable( () => !disable);
    }

    

   
    useEffect(()=>{
        const div = document.getElementById("slideDiv");
        if(disable === true){
            div.classList.add("slider");
            setTitulo("Cadastrar");
            setDescricao("Ainda não possui conta? Clique aqui para criar");
        }
        else{
            div.classList.remove("slider");
            setTitulo("Login");
            setDescricao("Já possuí conta? Realize o login");
        }

        
    }, [disable])

    

    return(
    
        <div className='formGeral' >
            <input value={disable} type='checkbox' id='slideForm'></input>
            <div id="slideDiv" onClick={() => handleDisable()}>
                <h3>{titulo}</h3>
                <h4>{descricao}</h4>
                <button>{titulo}</button>
            </div>
                <Login setUser={setUser} email={email} setEmail={e => setEmail(e)} senha={senha} setSenha={s => setSenha(s)} disable={disable}></Login>
                <Cadastro setUser={setUser}  email={email} setEmail={setEmail} senha={senha} changeSenha={setSenha} nome={nome} changeNome={setNome} disable={disable}></Cadastro>
        </div>
        
    )
}

export default Forms;
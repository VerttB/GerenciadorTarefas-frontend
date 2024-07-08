import Login from "src/components/Login/Login";
import Cadastro from "src/components/Login/Cadastro";
import {redirect, Link, useLocation} from 'react-router-dom'
import React, { useState, createContext, useEffect } from "react";
import {  Modal, Form, Input } from "antd";

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
        setDisable(() => !disable);
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
    
        <div className='formGeral'>
            <input value={disable} type='checkbox' id='slideForm'></input>
            <span id="slideDiv" onClick={() => handleDisable()}>
                <h1 className="titulo-slideDiv">Bem vindo de volta!</h1>
                <h4 className="descricao-slideDiv">{descricao}</h4>
                <h3 className="pagina-slideDiv">{titulo}</h3>
            </span>
            <Login setUser={setUser} email={email} setEmail={e => setEmail(e)} senha={senha} setSenha={s => setSenha(s)} disable={disable}></Login>
            <Cadastro setUser={setUser}  email={email} setEmail={setEmail} senha={senha} changeSenha={setSenha} nome={nome} changeNome={setNome} disable={disable}></Cadastro>
        </div>
        
    )
}

export default Forms;
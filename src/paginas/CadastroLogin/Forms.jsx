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
    const [msg, setMsg] = useState('Bem vindo!')

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    let leftLogin;
    
    function handleClick(){
        const btn = document.getElementById('btn-slider');
        setDisable(() => !disable);
    }

    useEffect(()=>{
        const div = document.getElementById("slideDiv");
        const divLogin = document.getElementById("div-login").getBoundingClientRect();
        leftLogin = divLogin.left + 'px';


        div.style.left = leftLogin;
       
    },[]);

    useEffect(()=>{
        const div = document.getElementById("slideDiv");
        const divLogin = document.getElementById("div-login").getBoundingClientRect();

        leftLogin = divLogin.left + 'px';
        div.style.left = leftLogin;
        
        if(disable === true){
            div.classList.add("slider");
            setTitulo("Cadastrar");
            setDescricao("Ainda não possui conta? Clique aqui para criar");
            setMsg("Olá de novo!");      
        }
        else{
            div.classList.remove("slider");
            setTitulo("Login");
            setDescricao("Já possuí conta? Realize o login");
            setMsg("Seja bem vindo!");    
        } 
    }, [disable, window.location.pathname])

    
    return(
        <div className='formGeral'>
            <section className="conteudo">
                <input value={disable} type='checkbox' id='slideForm'></input>
                <div id="slideDiv">
                    <h1 className="titulo-slideDiv">{msg}</h1>
                    <h4 className="descricao-slideDiv">{descricao}</h4>
                    <button id="btn-slider" className="pagina-slideDiv" onClick={() => handleClick()}>{titulo}</button>
                </div>
                <Login setUser={setUser} email={email} setEmail={e => setEmail(e)} senha={senha} setSenha={s => setSenha(s)} disable={disable}></Login>
                <Cadastro setUser={setUser} email={email} setEmail={e => setEmail(e)} senha={senha} setSenha={s => setSenha(s)} nome={nome} setNome={n => setNome(n)} disable={disable}></Cadastro>
            </section>
        </div>
        
    )
}

export default Forms;
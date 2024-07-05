import Login from "../Login/Login";
import Cadastro from "../Login/Cadastro";
import {redirect, Link, useLocation} from 'react-router-dom'
import React, { useState, createContext, useEffect } from "react";

import './forms.scss';

export const DisableForm = createContext();

function Forms(){
    const local = useLocation();
    console.log(local.pathname === '/login' ? false : true);
    const [disable, setDisable] = useState(local.pathname === '/login' ? false : true);
    const [titulo, setTitulo] = useState('Cadastre-se');
    const [descricao, setDescricao] = useState("Ainda não possui conta? Clique aqui para criar");
    //let checker = disable;

    console.log('diz ai', disable);


    function handleDisable(){
        setDisable(d => !d);
        
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
            <DisableForm.Provider value={disable}>
                <Login disable={disable}></Login>
                <Cadastro disable={disable}></Cadastro>
                </DisableForm.Provider>
        </div>
        
    )
}

export default Forms;
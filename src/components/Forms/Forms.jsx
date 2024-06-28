import Login from "../Login/Login";
import Cadastro from "../Login/Cadastro";


import React, { useState, createContext, useEffect } from "react";
import './forms.scss';

export const DisableForm = createContext();

function CadastroLogin(){
    
    const [disable, setDisable] = useState(false);
    const [titulo, setTitulo] = useState('Cadastre-se')
    const [descricao, setDescricao] = useState("Não possui conta ainda? Realize o Cadastro Aqui")
    let checker = disable;

    function handleDisable(){
        setDisable(!checker);
        console.log(checker);
    }
   
    useEffect(()=>{
        const div = document.getElementById("slideDiv");
        if(disable === true){
            div.classList.add("slider");
        }
        else{
            div.classList.remove("slider");
        }

        
    }, [checker])

    return(
        <>
        <div className='formGeral' onClick={() => handleDisable()}>
            <input value={checker} onChange={() => handleDisable()} type='checkbox' id='slideForm'></input>
            <label htmlFor="slideForm" id='formLabel'></label>
            <div id="slideDiv">
                <h3>{titulo}</h3>
                <h4>{descricao}</h4>
                <button>{titulo}</button>
            </div>
            <DisableForm.Provider value={disable}>
                <Login disable={disable}></Login>
                <Cadastro disable={disable}></Cadastro>
                </DisableForm.Provider>
        </div>
        </>
    )
}

export default CadastroLogin;
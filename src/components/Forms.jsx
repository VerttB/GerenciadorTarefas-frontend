import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
import React, { useState, createContext } from "react";
import '../assets/styles/pages/forms.scss';

export const DisableForm = createContext();

function CadastroLogin(){
    
    const [disable, setDisable] = useState(false);
    let checker = disable;

    function handleDisable(){
        checker = document.getElementById("slideForm").checked;
        console.log(typeof(checker));
        setDisable(checker);
        console.log(disable);

    }

    return(
        <>
        <div className='formGeral'>
            <input onChange={() => handleDisable()} type='checkbox' id='slideForm'></input>
            <label htmlFor="slideForm" id='formLabel'></label>
            <DisableForm.Provider value={disable}>
                <Login disable={disable}></Login>
                <Cadastro disable={disable}></Cadastro>
                </DisableForm.Provider>
                
            
        </div>
        </>
    )
}

export default CadastroLogin;
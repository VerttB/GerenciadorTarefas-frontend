import Login from './Login.jsx'
import Cadastro from './Cadastro.jsx'
import '../assets/styles/pages/forms.scss'

function CadastroLogin(){

    return(
        <>
        <div className='formGeral'>
            <input type='checkbox' id='slideForm'></input>
            <label htmlFor="slideForm" id='formLabel'></label>
            <Login></Login>
            <Cadastro></Cadastro>
        </div>
        </>
    )
}

export default CadastroLogin
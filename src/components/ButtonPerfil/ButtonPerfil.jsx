import { Button } from "antd";


function ButtonPerfil({user, valor, tipo, funcao}){
    return(
    <Button onClick={() => funcao(user)}  type={tipo} >{valor}</Button>
    )
}

export default ButtonPerfil;
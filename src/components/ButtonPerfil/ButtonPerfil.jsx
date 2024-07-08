import { Button } from "antd";


function ButtonPerfil({ valor, tipo, funcao}){
    return(
    <Button onClick={funcao}  type={tipo} >{valor}</Button>
    )
}

export default ButtonPerfil;
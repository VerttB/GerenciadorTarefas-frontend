import { Button } from "antd";


function ButtonPerfil({valor, tipo, icone}){
    return(
    <Button icon={icone} type={tipo} >{valor}</Button>
    )
}

export default ButtonPerfil;

import InputPerfil from "src/components/InputPerfil/InputPerfil";
import ButtonPerfil from "src/components/ButtonPerfil/ButtonPerfil";
import {Space} from "antd";
import { UserOutlined, MailOutlined,DeleteOutlined , EditOutlined} from '@ant-design/icons';
import './Perfil.scss'

function Perfil({user}){
    console.log(user);
    return(
<main className="perfil-conteiner">
<Space className="perfil-dados" size={"large"} align="center" direction="vertical">
        <InputPerfil prefix={UserOutlined} valor={user.nome} texto={"Nome do Perfil"}></InputPerfil>
        <InputPerfil prefix={MailOutlined} valor={user.email} texto={"Email do Perfil"}></InputPerfil>
        <Space size={"large"} align="center" direction="horizontal">
        <ButtonPerfil  valor={"Modificar"} tipo={"primary"}></ButtonPerfil>
        <ButtonPerfil  valor={'Deletar Perfil'} tipo={"dashed"}></ButtonPerfil>
        </Space>
        </Space>
    </main>
    )

}

export default Perfil;
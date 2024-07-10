import InputPerfil from "src/components/InputPerfil/InputPerfil";
import InputSenhaPerfil from "src/components/InputPerfil/InputSenhaPerfil";

import ButtonPerfil from "src/components/ButtonPerfil/ButtonPerfil";
import { Space } from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import './Perfil.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Perfil({ user, setUser }) {
    const [nome, setNome] = useState(user.nome);
    const [senha, setSenha] = useState(user.senha);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();

    const navegar = useCallback(() => {

        navigate('/cadastro');
      
    }, [navigate]);

    const modificarPerfil = () => {
        const userNovo = {userId: user.userId ,nome: nome, senha: senha, email: email };
        setUser(userNovo);
        fetch(`http://localhost:8080/GerenciadorTarefas/${user.userId}/editar_conta`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userNovo),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));
    }

    const deletarPerfil = () => {
        fetch(`http://localhost:8080/GerenciadorTarefas/${user.userId}/apagar_conta`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user.userId }),
        })
        .then(response => {console.log(JSON.stringify(response)); setUser({})})
        .catch(err => console.error(err));
    }
    function deslogar(){
        
        
        setUser({});
        localStorage.removeItem('user');
        setTimeout(navegar(), 50);
        
    }
    return (
        <main className="perfil-conteiner">

            
            <Space className="perfil-dados" size={"large"} align="center" direction="vertical">
                
                <InputPerfil change={e => setNome(e.target.value)} prefix={UserOutlined} valor={nome} texto={"Nome do Perfil"} />
                <InputPerfil change={e => setEmail(e.target.value)} prefix={MailOutlined} valor={email} texto={"Email do Perfil"} />
                <InputSenhaPerfil change={e => setSenha(e.target.value)} prefix={MailOutlined} valor={senha} texto={"Senha do Perfil"} />
                <Space size={"large"} align="center" direction="horizontal">
                    <ButtonPerfil funcao={modificarPerfil} valor={"Modificar"} tipo={"primary"} />
                    <ButtonPerfil funcao={deletarPerfil} valor={'Deletar Perfil'} tipo={"dashed"} />
                    <ButtonPerfil funcao={deslogar} valor={'Deslogar'} ></ButtonPerfil>
                </Space>
            </Space>
            <img className="perfil-decImage" src="src/assets/images/15.png" alt="" />
            <img className="perfil-decImage2" src="src/assets/images/14.png" alt="" />

        </main>
    );
}

export default Perfil;
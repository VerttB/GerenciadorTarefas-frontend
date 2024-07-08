import InputPerfil from "src/components/InputPerfil/InputPerfil";
import ButtonPerfil from "src/components/ButtonPerfil/ButtonPerfil";
import { Space } from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import './Perfil.scss';
import { useState } from "react";

function Perfil({ user }) {
    const [nome, setNome] = useState(user.nome);
    const [senha, setSenha] = useState(user.senha);
    const [email, setEmail] = useState(user.email);

    const modificarPerfil = () => {
        const userNovo = { nome: nome, senha: senha, email: email };
        fetch(`http://localhost:8080/GerenciadorTarefas/${user.userId}/editar_conta`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userNovo),
        })
        .then(response => response.json())
        .then(data => {
            setNome(data.nome);
            setSenha(data.senha);
            setEmail(data.email);
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
        .then(response => console.log(JSON.stringify(response)))
        .catch(err => console.error(err));
    }

    return (
        <main className="perfil-conteiner">
            <Space className="perfil-dados" size={"large"} align="center" direction="vertical">
                <InputPerfil change={e => setNome(e.target.value)} prefix={UserOutlined} valor={nome} texto={"Nome do Perfil"} />
                <InputPerfil change={e => setEmail(e.target.value)} prefix={MailOutlined} valor={email} texto={"Email do Perfil"} />
                <InputPerfil change={e => setSenha(e.target.value)} prefix={MailOutlined} valor={senha} texto={"Senha do Perfil"} />
                <Space size={"large"} align="center" direction="horizontal">
                    <ButtonPerfil funcao={modificarPerfil} valor={"Modificar"} tipo={"primary"} />
                    <ButtonPerfil funcao={deletarPerfil} valor={'Deletar Perfil'} tipo={"dashed"} />
                </Space>
            </Space>
        </main>
    );
}

export default Perfil;
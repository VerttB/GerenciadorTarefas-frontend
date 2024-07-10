import ColaboradorCard from "src/components/ColaboradorCard/ColaboradorCard";
import './Sobre.scss'
import { useEffect, useState } from "react";

function Sobre() {
    const [colaboradores, setColaboradores] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:8080/GerenciadorTarefas/sobre", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setColaboradores(data))
        .catch(error => console.error(error));
    }, []);
    
    return (

        <main className="sobre-main">
            <div className="cards-conteiner">
                {colaboradores.map((c) =>
                    <ColaboradorCard key={c.nome}
                        color={c.cor_primaria}
                        secundaryColor={c.cor_secundaria}
                        github={c.github}
                        nome={c.nome}
                        titulo={c.funcao}
                        linkedin={c.linkedin}>
                    </ColaboradorCard>)}
            </div>
        </main>
    )
}

export default Sobre;
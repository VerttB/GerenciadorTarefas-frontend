import ColaboradorCard from "src/components/ColaboradorCard/ColaboradorCard";
import './Sobre.scss'

function Sobre() {

    const colaboradores = [
        {
            color: "#ff00aa",
            secundaryColor: "#ff5bc8",
            github: 'https://github.com/VerttB',
            nome: 'Alysson',
            titulo: 'Front-End',
            tecnologia: 'React, SCSS, HTML',
            linkedin: 'https://www.linkedin.com/in/alysson-dos-anjos-00b431305/'
        },
        {
            color: "#0000FF",
            secundaryColor: "#0070ff",
            github: 'https://github.com/Cainan-bas',
            nome: 'Cainan',
            titulo: 'Back-End',
            tecnologia: 'MySQL, Spring Boot',
            linkedin: 'https://linkedin.com/leticosta4'
        },
        {
            color: "#800080",
            secundaryColor: "#f109af",
            github: 'https://github.com/leticosta4',
            nome: 'Letícia',
            titulo: 'Back-End',
            tecnologia: 'MyQL, Spring Boot',
            linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-almeida-9704162a0/'
        },
        {
            color: "#FF0000",
            secundaryColor: "#ffc177",
            github: 'https://github.com/Syrex72',
            nome: 'Kaik',
            titulo: 'Front-End',
            tecnologia: 'React, SCSS, HTML',
            linkedin: 'https://www.linkedin.com/in/kaik-costa-pereira-655544273/'
        }
    ];

    return (

        <main className="sobre-main">
            <div className="cards-conteiner">
                {colaboradores.map((c) =>
                    <ColaboradorCard key={c.nome} color={c.color}
                        secundaryColor={c.secundaryColor}
                        github={c.github}
                        nome={c.nome}
                        titulo={c.titulo}
                        tecnologia={c.tecnologia}
                        linkedin={c.linkedin}>
                    </ColaboradorCard>)}
            </div>
        </main>
    )
}

export default Sobre;
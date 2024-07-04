import ColaboradorCard from "src/components/ColaboradorCard/ColaboradorCard";
import './Sobre.scss'

function Sobre(){
    return(
        
        <main className="sobre-main">
        <div className="cards-conteiner">
            <ColaboradorCard color="#ff00aa"
                             secundaryColor="#ff5bc8"
                             github='https://github.com/VerttB'
                             nome='Alysson'
                             titulo='Front-End'
                             tecnologia='React, SCSS, HTML'
                             linkedin='https://www.linkedin.com/in/alysson-dos-anjos-00b431305/'>
            </ColaboradorCard>
            <ColaboradorCard color="#0000FF"
                             secundaryColor="#0070ff"
                             github='https://github.com/Cainan-bas'
                             nome='Cainan'
                             titulo='Back-End'
                             tecnologia='MySQL, Spring Boot'
                             linkedin='https://linkedin.com/leticosta4'>
            </ColaboradorCard>
            <ColaboradorCard 
                            color="#800080"
                            secundaryColor="#f109af"
                            github='https://github.com/leticosta4'
                            nome='Letícia'
                            titulo='Back-End'
                            tecnologia='MyQL, Spring Boot'
                            linkedin='https://www.linkedin.com/in/let%C3%ADcia-almeida-9704162a0/'>

            </ColaboradorCard>
            <ColaboradorCard 
                            color="#FF0000"
                            secundaryColor="#ffc177"
                            github='https://github.com/Syrex72'
                            nome='Kaik'
                            titulo='Front-End'
                            tecnologia='React, SCSS, HTML'
                            linkedin='https://www.linkedin.com/in/kaik-costa-pereira-655544273/'>
                            
            </ColaboradorCard>
        </div>
        </main>
    )
}

export default Sobre;
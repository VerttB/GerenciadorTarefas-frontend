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
                             tecnologia='React, SCSS, HTML'>
            </ColaboradorCard>
            <ColaboradorCard color="#0000FF"
                             secundaryColor="#0070ff"
                             github='https://github.com/Cainan-bas'
                             nome='Cainan'
                             titulo='Back-End'
                             tecnologia='MySQL, Spring Boot'>
            </ColaboradorCard>
            <ColaboradorCard 
                            color="#800080"
                            secundaryColor="#f109af"
                            github='https://github.com/leticosta4'
                            nome='Letícia'
                            titulo='Back-End'
                            tecnologia='MyQL, Spring Boot'>

            </ColaboradorCard>
            <ColaboradorCard 
                            color="#FF0000"
                            secundaryColor="#ffc177"
                            github='https://github.com/Syrex72'
                            nome='Kaik'
                            titulo='Front-End'
                            tecnologia='React, SCSS, HTML'>
            </ColaboradorCard>
        </div>
        </main>
    )
}

export default Sobre;
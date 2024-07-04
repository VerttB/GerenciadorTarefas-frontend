import ColaboradorCard from "src/components/ColaboradorCard/ColaboradorCard";
import './Sobre.scss'

function Sobre(){
    return(
        
        <main className="sobre-main">
        <div className="cards-conteiner">
            <ColaboradorCard color="#ff00aa" secundaryColor="#ff5bc8" image='https://github.com/VerttB.png' nome='Alysson'>
                Front-End
            </ColaboradorCard>
            <ColaboradorCard color="#0000FF" secundaryColor="#0070ff" image='https://github.com/Cainan-bas.png' nome='Cainan'>
                Back-End
            </ColaboradorCard>
            <ColaboradorCard color="#800080" secundaryColor="#f109af" image='https://github.com/leticosta4.png' nome='Letícia'>
                Back-End
            </ColaboradorCard>
            <ColaboradorCard color="#FF0000" secundaryColor="#ffc177" image='https://github.com/Syrex72.png' nome='Kaik'>
                Front-End
            </ColaboradorCard>
        </div>
        </main>
    )
}

export default Sobre;
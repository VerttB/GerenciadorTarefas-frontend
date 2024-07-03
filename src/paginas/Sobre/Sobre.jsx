import ColaboradorCard from "src/components/ColaboradorCard/ColaboradorCard";
import './Sobre.scss'

function Sobre(){
    return(
        
        <main className="sobre-main">
        <div className="cards-conteiner">
            <ColaboradorCard color="green" image='https://github.com/VerttB.png' nome='Alysson'></ColaboradorCard>
            <ColaboradorCard color="blue" image='https://github.com/Cainan-bas.png' nome='Cainan'></ColaboradorCard>
            <ColaboradorCard color="purple" image='https://github.com/leticosta4.png' nome='Letícia'></ColaboradorCard>
            <ColaboradorCard color="red" image='https://github.com/Syrex72.png' nome='Kaik'></ColaboradorCard>
        </div>
        </main>
    )
}

export default Sobre;
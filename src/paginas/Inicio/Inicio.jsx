import './inicio.scss';
import Carrossel from 'src/components/Carrossel/Carrossel';
function Inicio(){
    const imagem1 = 'src/assets/images/imagem1.png'
    return( 
        <main className="main-container">
            <Carrossel imagem1={imagem1}></Carrossel>

            <h2>Bem-Vindo (a) ao <strong>Quick Tasks</strong>!!</h2>
            <h3>O seu mais novo gerenciador de Tarefas</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui earum dolores aperiam molestias vitae culpa laudantium. Quaerat eius illum excepturi minus consectetur adipisci voluptatibus itaque, eaque dolorum nesciunt doloribus!</p>
        </main>
    )
}

export default Inicio;
import './inicio.scss';
import Carrossel from 'src/components/Carrossel/Carrossel';
function Inicio(){
    const imagem1 = 'src/assets/images/imagem1.jpg'
    const imagem2 = "src/assets/images/imagem2.jpg"
    const imagem3 = "src/assets/images/imagem3.jpg"
    return( 
        <main className="main-container">
            <Carrossel imagem1={imagem1} imagem2={imagem2} imagem3={imagem3}></Carrossel>
           <div className='main-titulo'>
            <h2>Bem-Vindo (a) ao <strong>Quick Tasks</strong>!!</h2>
            </div>
            <div className='main-texto'>
            <h3>O seu mais novo gerenciador de Tarefas</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui earum dolores aperiam molestias vitae culpa laudantium. Quaerat eius illum excepturi minus consectetur adipisci voluptatibus itaque, eaque dolorum nesciunt doloribus!</p>
            </div>
            <img className='imagem-inicio' src="src/assets/images/certo.png" alt="" />
        </main>
    )
}

export default Inicio;
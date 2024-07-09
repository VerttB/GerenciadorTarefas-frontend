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
            <img className='imagem-inicio' src="src/assets/images/extraSemfundo.png" alt="" />
            <svg className='ondas-inicio' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='ondas-inicio' fill="#0099ff" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,202.7C840,213,960,267,1080,272C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </main>
    )
}

export default Inicio;
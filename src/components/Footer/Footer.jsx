import './footer.scss';

function Footer(){
    let data = new Date();
    data = data.getFullYear()
    return(

        <footer>
            <p>©</p>
            <p>{data}</p> 
            <p id='ponto'>•</p>
            <p>Gerenciador de Tarefas </p>
            <p id='ponto'>•</p>
            <p>UNEB</p>
    

        </footer>
    )

}
export default Footer
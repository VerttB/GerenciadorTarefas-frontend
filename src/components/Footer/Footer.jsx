import './footer.scss';

function Footer(){
    let data = new Date();
    data = data.getFullYear()
    return(

        <footer>
            <p>©</p>
            <p>{data}</p> 
    

        </footer>
    )

}
export default Footer
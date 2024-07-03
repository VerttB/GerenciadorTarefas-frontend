import './ColaboradorCard.scss'



function ColaboradorCard({color, image, nome}){

    const corFundo = {
        backgroundColor: color,
    }
    return(
        <div className="colaborador-card">
            <div className="card-header" style={corFundo}>
                <img className="card-image" src={image} alt=""  />
            </div>
            <div className="card-conteudo">
                <h4>{nome}</h4>

                <div className="icones">

                </div>
            </div>
        </div>
    )

}


export default ColaboradorCard;
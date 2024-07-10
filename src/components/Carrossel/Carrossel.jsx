import React from 'react';
import { Carousel } from 'antd';
import './Carrossel.scss';


function Carrossel({imagem1, imagem2, imagem3, imagem4}) {
    return (
    <Carousel autoplay className='carrossel' effect='blur'  autoplaySpeed={5000}arrows infinite={true}>
      <div>
        <h3><img className='imagem' src={imagem1}></img></h3>
      </div>
      <div>
        <h3 ><img className='imagem' src={imagem2}></img></h3>
      </div>
      <div>
        <h3 ><img className='imagem' src={imagem3}></img></h3>
      </div>
    </Carousel>
    
    )
};

export default Carrossel;
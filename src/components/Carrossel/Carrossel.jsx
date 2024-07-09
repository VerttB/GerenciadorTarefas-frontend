import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '240px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
};

const imgStyle = {
    height: "100%",
}
function Carrossel({imagem1, imagem2, imagem3, imagem4}) {
    return (
    <Carousel autoplay effect='blur'  autoplaySpeed={2000}arrows infinite={false}>
      <div>
        <h3 style={contentStyle}><img style={imgStyle} src={imagem1}></img></h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    
    )
};

export default Carrossel;
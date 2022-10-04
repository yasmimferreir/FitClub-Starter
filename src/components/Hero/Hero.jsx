import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/missfit.png";
import hero_image_back from "../../assets/circulo.png";
import Heart from "../../assets/heart.png";
import Calorias from "../../assets/image.png"

const Hero = () => {
 

  return (
    <div className="hero" id="home">

     <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">

          <div></div>
          <span>Melhor academia Fitness direcionado para Mulheres</span>
        </div>

        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Moldar</span>
            <span> seu</span>
          </div>
          <div>
            <span>Corpo ideal</span>
          </div>
          <div>
            <span>
            Aqui vamos ajudá-la a emagrecer, definir,
            moldar e construir o seu corpo ideal e viver
            sua vida ao máximo
            </span>
          </div>
        </div>

        {/* figures */}
       <div className="figures">
        <div>
            <span>+2</span>
            <span>treinadores especialistas</span>
        </div>
        <div>
            <span>+</span>
            <span>Emagrecimento, Definição, Hipertrofia</span>
        </div>
        <div>
            <span>+3</span>
            <span>programas fitness</span>
        </div>
     </div>

           {/* hero button */}
           <div className="hero-buttons">
            <buttons className="btn">Começar</buttons>
            <buttons className="btn">Saiba mais</buttons>
           </div>

      </div>
      <div className="right-h">
        <button className="btn">Acesse agora</button>

       <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>frequência cardíaca</span>
        <span>116 bpm</span>
       </div>

              {/* HERO IMAGENS */}
        <img src={hero_image} alt="" className="hero-image" ></img>
        <img src={hero_image_back} alt="" className="hero-image-back"></img>

        {/* calorias */}
        <div className="calories">
          <img src={Calorias} alt=""></img>
          <div>
          <span>calorias queimadas</span>
          <span>220 Kcal</span>
          </div>
        </div>
        
        </div>
    </div>
  );
};
export default Hero;

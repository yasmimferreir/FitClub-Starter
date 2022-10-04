import React from "react";
import "./Reasons.css";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import tick from "../../assets/ticketPink.png";
import Partens from "../../assets/parceria.png";



const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>algumas razões</span>

                <div>
                    <span className="stroke-text">Por que </span>
                    <span> nós escolher?</span>
                </div>

                <div className="details-r">
                <div>
                    <img src={tick} alt=""></img>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        </div>
                <div>
                    <img src={tick} alt=""></img>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                    </div>

                <div>
                    <img src={tick} alt=""></img>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                </div>

                <div>
                    <img src={tick} alt=""></img>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                 </div>
                </div>

                <span style={{
                    color: 'var(--gray)', 
                    fontWeight: 'normal',
                }}>
                    nossos parceiros
                    </span>

                    <div className="partners">
                        <img src={Partens} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Reasons;
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3koat5m', 'template_rgyzjam', form.current, 'XSJIjZWRYo2KQlNCr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
            <div>
                <span className="stroke-text">Pronta</span>
                <span> para mudar </span>
            </div>

            <div>
                <span className="stroke-text">seu corpo?</span>
            </div>

            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" 
                    placeholder="digite seu endereço de e-mail" />
                    <button className="btn btn-j">Acessar agora</button>
                </form>
            </div>

        </div>
    )
}

export default Join;
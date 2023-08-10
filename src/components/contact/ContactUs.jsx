import React from "react";
import './contactUs.css';

function ContactUs () {
    return(
        <div class="fondo">
            <div class="formBox">
                <form class="form">
                    <div class="formContainer">
                        <h2 class="formTitle">Contáctenos</h2>
                        <input type="text" class="formInput" placeholder="Escriba su nombre" />
                        <input type="email" class="formInput" placeholder="Escriba su e-mail" />
                        <textarea class="formInput formInput--massage" placeholder="Escriba su mensaje"></textarea>

                        <input type="submit" value="Enviar" class="formCta" />
                    </div>
                </form>

            </div>
        </div>
    );

}

export default ContactUs
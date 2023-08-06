import React from "react";
import './contactUs.css';

function ContactUs () {
    return(
        <div>
            <form class="form">
                <div class="form_container">
                    <h2 class="form_container">Contáctame</h2>
                    <input type="text" class="form_input" placeholder="Escriba su nombre" />
                    <input type="email" class="form_input" placeholder="Escriba su e-mail" />
                    <textarea class="form_input--massage" placeholder="Escriba su mensaje"></textarea>

                    <input type="submit" value="enviar" class="form_cta" />
                </div>
            </form>

        </div>
    );

}

export default ContactUs
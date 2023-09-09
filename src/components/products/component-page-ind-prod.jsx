import React from "react";
import OwnProducts from "./products-reutilizable";
import spritesImport from "../../assets/sprites/spritesImports";
import './page-prod.css';

export default function PageComponent(props) {
    return (
        <>
            <div className="page-complete">
                <div className="img-page-component">
                    <img className="imgg" src={props.imgg} alt={props.title}/>
                </div>
                    <div className="page-component">
                        <h1 className="titlee">{props.title}</h1>
                        <p className="descripcion">{props.descripcion}</p>
                        <h2 className="precio">{props.precio}</h2>
                        <br></br>
                        <p className="bio">{props.biografia}</p>  
                        <br></br>
                        <button name="agregar-carrito">AGREGAR AL CARRITO</button>   
                         
                    </div>
            </div>
        </>
    )
}
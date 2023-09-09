import React from "react";


export default function OwnProducts(props) {
    return (
        <div className="individual-products">
            <a href={props.href}>
                <img src={props.img} alt="Product"/>
                <div className="divider"><hr></hr></div>
                <div className="title">{props.title}</div>
                <div className="price">{props.price}</div>
                <div className="divider"><hr></hr></div>
                <div className="info">{props.info}</div>
            </a>
        </div>
    )
}
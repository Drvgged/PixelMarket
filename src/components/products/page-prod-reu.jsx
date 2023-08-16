import React from "react";

export default function Page(props) {
    return (
        <div className="reucard">
            <h1 className="title">{props.title}</h1>
            <div className="price">{props.price}</div>
            <p className="info">{props.info}</p>
            <img src={props.img} alt="Product"/>
            <button type="Buy"></button>
        </div>
    )
}
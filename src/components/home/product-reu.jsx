import React from "react";

export default function ReuCard(props) {
    return (
        <div className="reucard">
            <a href={props.href}>
                <img src={props.img} alt="Product"/>
                <div className="divider"><hr></hr></div>
                <div className="title">{props.title}</div>
                <div className="price">{props.price}</div>
                <div className="info">{props.info}</div>
            </a>
        </div>
    )
}
import React from "react";

export function PeopleCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt="worker" className="workerphoto"/>
            <h3 className="workername">{props.name}</h3>
            <h3 className="workerage">{props.age}</h3>
            <h3 className="workerrole">{props.role}</h3>
        </div>
    )
}
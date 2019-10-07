import React from 'react';


function Box(props) {

    const styling = {
        height:"100px",
        minWidth:"100px",
        border:"solid 2px"
    };

    const liStyle = {
        display: "inline-block",
        width: "100px",
        height: "100px",
        background: "#ccc",
        margin: "5px"
    };

    return (
        <div>
            <ul>
                <li style={liStyle}><img src={props.img}/></li>
                <li style={liStyle}>Name: {props.name}</li>
                <li style={liStyle}>Category: {props.category}</li>
                <li style={liStyle}>Value: {props.value}</li>
            </ul>
        </div>
    );
}

export default Box;
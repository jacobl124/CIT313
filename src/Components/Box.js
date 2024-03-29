import React from 'react';


function Box(props) {
    
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
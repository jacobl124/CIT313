import React from 'react';

function Nav(){

    const styling = {
        main:{
            height: "50px",
            width: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor:"grey",
        },
        ul:{
            listtyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "#333",
        },
        li:{
            width: "12%",
            float:"left",
            borderStyle: "solid",
            backgroundColor: "black",
            color: "white"
        }
    };

    return(
        <div style={styling.main}>
            <ul style={styling.ul}>
                <li style={styling.li}>Games</li>
                <li style={styling.li}>Televison</li>
                <li style={styling.li}>Animation</li>
                <li style={styling.li}>All</li>
            </ul>
        </div>
    )
}

export default Nav;
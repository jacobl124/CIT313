import React, {useState} from 'react'
import Box from "./Box";

function Wrapper(props) {

    let Funko = props.funkos.map((char, index) =>
        <Box key={index} img={char.img} name={char.name} category={char.category} value={char.value}/>
    )
    //random text
    return(
        <div>
        {Funko}
        </div>
    );

}

export default Wrapper;
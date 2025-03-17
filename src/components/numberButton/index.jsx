import React from "react"

function NumberButton (props){
    const {number, onClick} = props


    return (<>
    <button onClick={()=> onClick(number)} > {number}</button>
    </>)
}

export default NumberButton
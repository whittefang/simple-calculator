import React from "react"

function EquationButton (props){
    const {symbol, onClick} = props


    return (<>
    <button onClick={()=> onClick(symbol)} > {symbol}</button>
    </>)
}

export default EquationButton
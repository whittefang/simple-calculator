import React, { useState } from "react"
import NumberButton from "../numberButton"
import EquationButton from "../equationButton"

function Calculator (){
    const [equationHistory, setEquationHistory] = useState([])
    const [equation, setEquation] = useState("")
    const [historicalNumber, setHistoricalNumber] = useState("")
    const [currentNumber, setCurrentNumber] = useState("")

    const handleSolve = () =>{
        if (historicalNumber === "" || equation === ""){
            setEquationHistory([...equationHistory, currentNumber])
        } else if (currentNumber == ""){
            setEquationHistory([...equationHistory, "0"])
        } else {
            var parsedHistorical = parseInt(historicalNumber)
            var parsedCurrent = parseInt(currentNumber)

            var result

            if (equation === "X"){
                result = parsedHistorical * parsedCurrent
            } else if (equation === "+"){
                result = parsedHistorical + parsedCurrent
            } else if (equation === "-"){
                result = parsedHistorical - parsedCurrent
            } else if (equation === "/"){
                result = parsedHistorical / parsedCurrent
            } 
            var completeEquation = `${historicalNumber} ${equation} ${currentNumber} = ${result}`
            setHistoricalNumber("")
            setCurrentNumber(result)
            setEquation("")
            setEquationHistory([...equationHistory, completeEquation])
        }
    }

    const handleNumberInput = (number) =>{
        setCurrentNumber(currentNumber + number)
    }

    const handleEquationInput = (symbol) =>{
        setHistoricalNumber(currentNumber)
        setCurrentNumber("")
        setEquation(symbol)
    }

    const handleClear = () =>{
        setCurrentNumber("")
        setHistoricalNumber("")
        setEquation("")
    }



    return (<>
    <div>
        <label key="equation view">{historicalNumber}</label>
        <label key="equation symbol">{equation}</label>
    </div>
    <div><label key="numberView">{currentNumber === "" ? 0 : currentNumber }</label></div>
    <div>
        <NumberButton number={"7"} onClick={handleNumberInput}/>
        <NumberButton number={"8"}  onClick={handleNumberInput}/>
        <NumberButton number={"9"}  onClick={handleNumberInput}/>
        <EquationButton symbol={"X"} onClick={handleEquationInput}/>
    </div>
    <div>
        <NumberButton number={"4"}  onClick={handleNumberInput}/>
        <NumberButton number={"5"}  onClick={handleNumberInput}/>
        <NumberButton number={"6"}  onClick={handleNumberInput}/>
        <EquationButton symbol={"-"} onClick={handleEquationInput}/>
    </div>
    <div>
        <NumberButton number={"1"}  onClick={handleNumberInput}/>
        <NumberButton number={"2"}  onClick={handleNumberInput}/>
        <NumberButton number={"3"}  onClick={handleNumberInput}/>
        <EquationButton symbol={"+"} onClick={handleEquationInput}/>
    </div>
    <div>
        <NumberButton number={"0"} onClick={handleNumberInput}/>
        <button onClick={() => handleSolve()}>=</button>
        <button onClick={() => handleClear()}>CLR</button>
    </div>
    {equationHistory && equationHistory.map((equation) => { return (<div>{equation}</div>)})}

    </>)
}

export default Calculator
import React, { useState } from "react";


const App = () => {
    let [calculate, setCalculate] = useState("");

    function handleCalculations(e) {
        setCalculate(calculate + e.target.innerText);
    }

    function result(e) {
        try {
            let ans = eval(calculate)
            setCalculate(ans);
        }
        catch (err) {
            setCalculate(err)
        }
    }

    function clearInput() {
        setCalculate("");
    }

    return (
        <div className="calci">
            <div>
                <input type="text" value={calculate} />
            </div>
            <div className="bottom">
                <button onClick={clearInput}>C</button>
                <button onClick={handleCalculations}>/</button>
                <button onClick={handleCalculations}>*</button>
                <button onClick={handleCalculations}>-</button>
                <button onClick={handleCalculations}>7</button>
                <button onClick={handleCalculations}>8</button>
                <button onClick={handleCalculations}>9</button>
                <button onClick={handleCalculations}>4</button>
                <button onClick={handleCalculations}>5</button>
                <button onClick={handleCalculations}>6</button>
                <button onClick={handleCalculations}>1</button>
                <button onClick={handleCalculations}>2</button>
                <button onClick={handleCalculations}>3</button>
                <button onClick={handleCalculations}>0</button>
                <button onClick={handleCalculations}>.</button>
                <button onClick={handleCalculations}>+</button>
                <button onClick={result}>=</button>
            </div>


        </div>


    )
}
export default App;




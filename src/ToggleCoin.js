import React, {useState} from 'react'

function ToggleCoin() {
    const [side, setSide] = useState()
    const [total, setTotal] = useState(0)
    const [right, setRight] = useState()
    const [count, setCount] = useState(0)

    // function for handling submit for form
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    // function for head toss
    const toggleHead = () => {
        const rslt = Math.round(Math.random())
        const txt = "heads!"
        setSide(rslt)
        if (rslt == 1) {
            setRight(txt)
            setCount(count + 1)
        } else if (rslt == 0) {
            setRight()
        }
        setTotal(total + 1)
    }

    // function for tails
    const toggleTail = () => {
        const rslt = Math.round(Math.random())
        const txt = "tails!"
        setSide(rslt)
        if (rslt == 0) {
            setRight(txt)
            setCount(count + 1)
        } else if (rslt == 1) {
            setRight()
        }
        setTotal(total + 1)
    }

    // function to reset
    const handleReset = () => {
        setRight(0)
        setTotal(0)
        setCount(0)
    }

    return (
        <>
            <form className="form-class" onSubmit={handleSubmit}>
                <h1>Coin Toss App</h1>
                <p>You've played {total} times</p>
                <p>Coin landed on {side === 1 ? "heads" : "tails"}</p>
                <p>Correct? - {right === "heads!" ? "Yay, heads!" : (right === "tails!" ? "Yay, tails!" : "uh oh, try again")}</p>
                <p>Number right - {count}</p>
                <p>Percentage right - {count}/{total}</p>
                <button className="btn" onClick={toggleHead}>Heads</button>
                <button className="btn" onClick={toggleTail}>Tails</button> <br />
                <button className="btn" onClick={handleReset}>Reset</button>
            </form>
        </>
    )
}

export default ToggleCoin;
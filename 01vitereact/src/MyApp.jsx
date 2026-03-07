import { useState } from "react";

// import "./Run.css"

function Run(){
    const username = 'Yadnyesh_96'

    const [counter,setCounter]=useState(1)

    const addValue=()=>{
        setCounter(counter+1)
    }

    const removeValue=()=>{
        setCounter(counter-1)
    }
    return(
        <div className="container">
            <div className="card">
                <h1>React Development</h1>
                <p className="username">@{username}</p>

                <h2 className="counter">{counter}</h2>

                <div className="btn-group">
                    <button onClick={addValue} disabled={counter === 20}>
                        Add
                    </button>
                    <button onClick={removeValue} disabled={counter === 0}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Run;
import useCounter from "../hooks/useCounter";


function Counter() {

    const { count,
        incrementCount,
        decrementCount,
        resetCount } = useCounter();

    return (
        <div>
            <h1>Count : {count}</h1>

            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default Counter;
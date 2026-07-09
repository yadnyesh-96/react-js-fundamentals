import useCounter from "../hooks/useCounter";

function LikesCounter() {

    const { count, incrementCount, decrementCount, resetCount } = useCounter();

    return (
        <div> <h1>Count : {count}</h1> <button onClick={incrementCount}>+</button> <button onClick={decrementCount}>-</button> <button onClick={resetCount}>Reset</button> </div>
        // <div className="h-screen w-1/2 border flex justify-center items-center">


        //     <div className="border flex flex-col justify-center items-center p-5 rounded-sm shadow-2xl">

        //         <h1
        //             className="text-6xl font-semibold text-center m-5">
        //             Count : {count}
        //         </h1>

        //         <div className="w-32 flex flex-col justify-center items-center p-5 gap-2">
        //             <button
        //                 className="border border-blue-700 shadow-md font-semibold text-3xl w-28 py-1 rounded-md bg-blue-400"
        //                 onClick={incrementCount}
        //             >
        //                 LIKE
        //             </button>

        //             <button
        //                 className="border border-green-700 shadow-md font-semibold text-3xl w-28 py-1 rounded-md bg-green-400"
        //                 onClick={decrementCount}>
        //                 UNLIKE
        //             </button>

        //             <button
        //                 className="border border-red-700 shadow-md font-semibold text-2xl text-white w-28 py-1 rounded-md bg-red-400"
        //                 onClick={resetCount}>
        //                 Reset-Like
        //             </button>

        //         </div>

        //     </div>

        // </div>
    )
}

export default LikesCounter;
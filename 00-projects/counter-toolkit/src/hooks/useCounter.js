import { useState } from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {

        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(0);
        }
    }

    function resetCount() {
        setCount(0);
    }

    return {
        count,
        incrementCount,
        decrementCount,
        resetCount
    }
}

export default useCounter;
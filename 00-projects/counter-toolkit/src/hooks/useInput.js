import { useState } from "react";

function useInput() {
    const [value, setValue] = useState("");

    function valueChange(event) {
        setValue(event.target.value);
    }

    function reset() {
        setValue("");
    }
    return {
        value,
        valueChange,
        reset
    }
}

export default useInput;
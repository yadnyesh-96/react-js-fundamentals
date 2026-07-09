import { useState } from "react";

function useToggle() {

    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn(!isOn);
    }

    return {
        isOn,
        toggle
    };
}

export default useToggle;
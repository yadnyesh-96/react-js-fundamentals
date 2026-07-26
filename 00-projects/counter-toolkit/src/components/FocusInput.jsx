import { useRef } from "react";


function FocusInput() {

    const inputRef = useRef(null)

    function handleFocus() {
       
        const input = inputRef.current;
        input.focus();
    }

    return (
        <div className="h-full p-40">
            <div className="border shadow-md p-5 flex flex-col bg-slate-100 rounded-md h-auto m-auto w-1/2">
                <input ref={inputRef} className="p-2 border mb-4" type="text" name="" id="name" placeholder="Enter Input" />

                <button onClick={handleFocus} className="border p-1 bg-green-300">Focus Input</button>
            </div>
        </div>
    )
}

export default FocusInput;
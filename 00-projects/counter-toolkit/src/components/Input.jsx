import { useState } from "react";
import useInput from "../hooks/useInput";


function Input() {

    const { value,
        valueChange,
        reset } = useInput();

    return (
        <div className="h-screen flex items-center justify-center">

            <div className="border w-60 flex flex-col items-center justify-center p-4 px-6">
                <h1 className="border-b border-slate-300 font-semibold pb-1 ">Input Hook</h1>
                <input
                    value={value}
                    onChange={valueChange}
                    className="border mt-5 p-1 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Name"
                />

                <div className="w-full mt-4 py-1">
                    <h3 className="text-sm text-slate-500 border-b border-slate-600">Inserted Text :</h3>
                    <p className="border mt-1 text-sm text-slate-600 ">{value}</p>
                </div>

                <button
                    className="border w-full mt-4 py-1 rounded-md font-semibold bg-slate-600 text-white border-none"
                    onClick={reset}
                >
                    RESET-TEXT

                </button>
            </div>

        </div>
    )
}

export default Input;
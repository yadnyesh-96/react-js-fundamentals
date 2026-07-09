import useToggle from "../hooks/useToggle";


function Toggle() {

    const { isOn,
        toggle } = useToggle();

    return (
        <div>
            <h2>
                Dark Mode : {isOn ? "ON" : "OFF"}
            </h2>

            <button  
            className="border  w-24 py-1 bg-slate-500 text-white font-bold"
            onClick={toggle}>
                Toggle
                </button>
        </div>
    );
}

export default Toggle;
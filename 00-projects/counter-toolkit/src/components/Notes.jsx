import { useEffect, useState } from "react";

function Notes() {

    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);


    function saveNote() {
        const updatesNotes = [...notes, note]
        setNotes(updatesNotes);
        localStorage.setItem("notes", JSON.stringify(updatesNotes));
        setNote("");
    }

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(data);
    }, [])

    return (
        <div className=" flex items-center justify-center p-60">
            <div className="w-64 flex flex-col items-center justify-center border border-slate-200 bg-slate-100 p-6 rounded shadow-2xl">
                <h1 className="font-medium border-b border-slate-500 pb-1 w-36 text-center mb-2">Notes Keeper</h1>

                <textarea
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="border mt-2 p-2 w-full h-40 resize-none"
                    placeholder="Enter Something..."
                />


                <div className="w-full mt-3 flex items-center justify-between">
                    <button
                        className="px-6 rounded  font-medium bg-slate-700 text-white border "
                        onClick={saveNote}
                    >
                        Save</button>

                    <p className="text-sm italic text-slate-500">
                        Saved Note...
                    </p>

                </div>


                <h6 className="w-full border border-slate-200 mt-3"></h6>

                <h2 className="w-full text-start my-1 font-semibold text-sm text-slate-500">Saved Notes :</h2>

                <h6 className="w-full border border-slate-200"></h6>


                <ul className="w-full text-start list-disc list-inside  mt-2 ">
                    {notes.map((item, index) => (
                        <li
                            key={index}
                            className="border-b border-b-1 border-slate-200 mb-1"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <h6 className="w-full border border-slate-200 mb-2"></h6>
            </div>
        </div>
    )
}

export default Notes;
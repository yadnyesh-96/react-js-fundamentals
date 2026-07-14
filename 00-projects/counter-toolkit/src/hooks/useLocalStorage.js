import { useEffect, useState } from "react";

function useLocalStorage() {

    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);


    function saveNotes() {

        if (note.trim() === "") {
            return;
        }

        const updateNotes = [...notes, note];
        setNotes(updateNotes);
        localStorage.setItem("notes", JSON.stringify(updateNotes));
        setNote("");
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(data);
    }, [])


    return{
        note,
        setNote,
        saveNotes,
        notes
    }
}

export default useLocalStorage;
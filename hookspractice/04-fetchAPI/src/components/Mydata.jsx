import { useEffect, useState } from "react";


function Mydata() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setUsers(data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    //useEffect to runs once after component mount 
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="flex flex-col items-center p-10 justify-center h-screen border border-slate-500">
            <div className="flex items-center justify-between w-full m-5 p-2 border-b border-slate-700 ">
                <h2 className="text-2xl font-bold text-slate-700">Users List</h2>
                <button className="border-2 border-yellow-700 bg-yellow-500 px-4 rounded-md text-white font-semibold shadow-md" onClick={fetchUsers}>Refersh</button>
            </div>
            <div className="flex flex-col items-center w-full mt-4">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && (
                    <ul>
                        {users.map((u) => (
                            <li key={u.id}>{u.name} - {u.email}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Mydata;
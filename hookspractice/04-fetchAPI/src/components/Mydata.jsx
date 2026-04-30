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
        <div className="flex flex-col items-center p-10 justify-center h-screen">
            <div className="flex items-center justify-between w-full m-5 p-2 border-b border-slate-700 ">
                <h2 className="text-2xl font-bold text-slate-700">Users List</h2>
                <button className="border-2 border-yellow-700 bg-yellow-500 px-4 rounded-md text-white font-semibold shadow-md" onClick={fetchUsers}>Refersh</button>
            </div>
            <div className="flex flex-col items-center w-full mt-4">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && (
                    <ul className="w-full">
                        {users.map((u) => (
                            <li className="flex  justify-between w-full border-b border-slate-200 py-1 mx-2" key={u.id}>{u.id}<p className="w-full text-slate-500 text-sm">. {u.name}-{u.address.geo.lat}</p><p className="w-full text-slate-500 text-sm">{u.email}</p></li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Mydata;
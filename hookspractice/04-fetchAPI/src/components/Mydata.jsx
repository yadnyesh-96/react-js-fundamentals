import { useEffect, useState } from "react";


function Mydata() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(flase);
    const [error, setError] = useState(null);

    const fetchUsers = async () =>{
        setLoading(true);
        setError(null);

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if(!response.ok){
                throw new Error("Failed to fetch data");
            }

            const  data = await response.json();
            setUsers(data);

        }catch (err){
            setError(err.message);
        }finally{
            setLoading(flase);
        }
    };

    //useEffect to runs once after component mount 
    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <div className="flex items-center justify-center h-screen border border-slate-500 m-5">
            <h2>Users List</h2>
            <button onClick={fetchUsers}>Refersh</button>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && (
                <ul>
                    {users.map((u)=>(
                        <li key={u.id}>{u.name} - {u.email}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Mydata;
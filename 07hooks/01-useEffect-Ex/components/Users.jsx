import { useEffect, useState } from "react";

function Users() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await response.json();

            setUser(data);
        }

        loadUser();
    }, [])


    return (
        <>
            <div className="p-6 flex justify-center items-center h-screen">
                <table className="border border-black">
                    <thead className="bg-green-700 text-white">
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Employee Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Contact No.</th>
                            <th className="border px-4 py-2">Company Name</th>
                        </tr>
                    </thead>

                    <tbody className="bg-green-100">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.phone}</td>
                                <td className="border px-4 py-2">{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users;
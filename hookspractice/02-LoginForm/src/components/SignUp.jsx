
import axios from "axios";
import { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        await axios.post("http://localhost:8000/api/signup", {
            username,
            password,
            role
        });
        alert("Signup done");
    };

    const login = async () => {
        await axios.post("http://localhost:8000/api/login", {
            username,
            password
        });
        alert(res.data.message);
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
                <input className='w-1/4 my-5 border border-slate-300 p-2 rounded-md' onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                <input className='w-1/4 my-5 border border-slate-300 p-2 rounded-md' onChange={(e) => setRole(e.target.value)} type="text" placeholder='Role' />
                <input className='w-1/4 my-5 border border-slate-300 p-2 rounded-md' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                <button className="w-1/4 p-1 m-2 rounded-md font-semibold  border border-blue-500 bg-blue-300" onClick={signup}>SignUp</button>
                <button className="w-1/4 p-1 m-2 rounded-md font-semibold  border border-blue-600 bg-blue-200" onClick={login}>Login</button>
        </div>
    )
}

export default SignUp;
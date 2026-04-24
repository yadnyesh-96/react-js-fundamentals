import { useState } from "react";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.taget.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // e.target.value ===> means what exact user type to help show real time

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("All fileds are required !");
        } else {
            setError("");
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 border p-6 rounded-xl"
                >

                    <h2 className="text-xl font-bold">Login</h2>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmail}
                        className="border rounded p-2"
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePassword}
                        className="border p-2 rounded"
                    />

                    <button className="bg-blue-500 text-white p-2 rounded">Login</button>

                    {error && <p className="text-red-500">{error}</p>}

                    <div>
                        <p>Email:{email}</p>
                        <p>Password:{password}</p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
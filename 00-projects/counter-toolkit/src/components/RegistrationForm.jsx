import { useState } from "react";


function RegistrationForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    function handleChange(e) {

        // const name = e.target.name;
        // const value = e.target.value;

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted");
        console.log(formData);

        const newErrors = {}

        if (formData.name === "") {
            newErrors.name = "Name is required";
        }

        if (formData.email === "") {
            newErrors.email = "Email is required";
        }

        if (formData.password === "") {
            newErrors.password = "Password is required";
        }

        setError(newErrors)
    }


    const [error, setError] = useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div className="p-20">
            <div className="border rounded-md border-slate-200 bg-slate-100 mx-80 p-10 flex flex-col items-center justify-center">

                <h1 className="w-60 text-center font-bold text-2xl text-slate-500 border-b-2 pb-2 border-slate-300 ">Registration Form</h1>

                <form
                    onSubmit={handleSubmit}
                    className="w-full mt-5 border p-5"
                >

                    <div className="w-full p-3">
                        <label className="font-semibold text-slate-500" htmlFor="name">Name: </label>
                        <input
                            className="border border-slate-300 w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Name" />
                        {
                            error.name && <p className="text-red-500">{error.name}</p>
                        }
                    </div>

                    <div className="w-full p-3">
                        <label className="font-semibold text-slate-500" htmlFor="email">Email: </label>
                        <input
                            className="border border-slate-300 w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email" />
                        {
                            error.email && <p className="text-red-500">{error.email}</p>
                        }
                    </div>

                    <div className="w-full p-3">
                        <label className="font-semibold text-slate-500" htmlFor="password">Password: </label>
                        <input
                            className="border border-slate-300 w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password" />
                        {
                            error.password && <p className="text-red-500">{error.password}</p>
                        }
                    </div>

                    <div className="w-full p-3">
                        <button
                            type="submit"
                            className="w-full border border-slate-400 p-2 rounded bg-blue-300 font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default RegistrationForm;
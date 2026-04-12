// import { useState } from 'react'
import useInput from "./hooks/useInput";

function App() {
  const name = useInput("");
  const email = useInput("");
  return (
    <>
      <div className="grid place-items-center h-screen bg-slate-50 p-5">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm flex flex-col gap-4 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">User Profile</h2>
          <input className="border border-slate-300 rounded-lg p-2.5 outline-none focus-ring-2 focus-ring-blue-500 transition-all"
            placeholder="Enter name"
            value={name.value}
            onChange={name.handleChange}
          />
          <input className="border border-slate-300 rounded-lg p-2.5 outline-none focus-ring-2 focus-ring-blue-500 transition-all"
            placeholder="Enter email"
            value={email.value}
            onChange={email.handleChange}
          />
          <div className="mt-2 pt-4 border-t border-slate-100">
            <p className="text-slate-700 font-medium">Hello {name.value || 'Guest'}</p>
            <p className="text-sm font-serif text-slate-400 mt-1">{email.value}</p>
          </div>
          <div className="grid grid-flow-col place-items-center mt-2 p-5 border-t border-slate-100">
            <button type="button" className="px-4 py-1 font-semibold text-red-800 bg-red-100 rounded-3xl border shadow-md shadow-red-100 border-red-300"
              onClick={name.reset}>Reset-Name</button>
            <button type="button" onClick={email.reset} className="px-4 py-1 font-semibold text-red-800 bg-red-100 rounded-3xl border shadow-md shadow-red-100 border-red-300">Reset-Email</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

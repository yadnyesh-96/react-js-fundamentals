import useFetch from "./myHooks/useFetch"

function App() {
  const { data, loading, error } = useFetch("//official-joke-api.appspot.com/random_joke");

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-300">
        <div className="w-auto h-48 border border-slate-400 bg-slate-50 rounded-xl shadow-sm p-5">
          {loading && <p className="text-xl text-slate-500">Loading...</p>}
          {error && <p className="text-xl text-red-500">{error}</p>}
          <div className="flex mt-7"><h1 className="text-2xl font-semibold me-2" >🤔 </h1><p className="text-xl "> {data && data.setup}</p></div>
          <div className="m-2 border border-slate-200"></div>
          <div className="flex mt-7"><h1 className="text-2xl font-semibold me-2" >🤭 </h1><p className="text-xl "> {data && data.punchline}</p></div>

          {/* {data && <h1>setup : {data.setup} <br/> {data.punchline}</h1>} */}

        </div>
      </div>
    </>
  )
}

export default App

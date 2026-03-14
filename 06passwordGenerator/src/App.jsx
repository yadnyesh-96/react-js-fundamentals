import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassWord] = useState("");


  const passWordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  // 
  const passWordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWxyzabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i < length - 1; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    setPassWord(pass);
  }, [length, numberAllowed, charAllowed, setPassWord])

  useEffect(() => {
    passWordGenerator();
  }, [length, numberAllowed, charAllowed, passWordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto  my-8  ">
        <div className="bg-amber-50  px-4 py-3 shadow-md rounded-lg">
          <h1 className="text-amber-700 font-bold text-center my-3">PassWord Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 border border-none"
              placeholder="Password"
              readOnly
              ref={passWordRef}
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyPasswordToClipboard}
            >Copy</button>
          </div>
          <div className="flex justify-between gap-x-1">

            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={40}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLenght(e.target.value)
                }}
              />
              <label htmlFor="length">{length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberAllowed">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                id="characterInput"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charAllowed">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default App

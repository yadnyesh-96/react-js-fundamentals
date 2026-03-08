import { useState } from 'react'


import './index.css'

function MyApp() {

    const [counter,setcounter] = useState(1)

    function increment(){
        setcounter(counter+1)
    }

    function decrement(){
        setcounter(counter-1)
    }

    return (


        <body class="flex items-center justify-center h-screen bg-gray-200">

           
            <div class="w-64 h-96 bg-white shadow-lg rounded-xl flex flex-col justify-between p-6">

               
                <div class="flex items-center justify-center flex-grow">
                    <div class="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full text-3xl font-bold">
                        {counter}
                    </div>
                </div>

               
                <div class="flex justify-between ">
                    <button id='btn' onClick={increment} disabled={counter===20} class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mr-1">
                       Increment
                    </button>

                    <button id='btn' onClick={decrement} disabled={counter === 0} class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ">
                        Decrement
                    </button>
                </div>

            </div>
        </body>
    )
}

export default MyApp
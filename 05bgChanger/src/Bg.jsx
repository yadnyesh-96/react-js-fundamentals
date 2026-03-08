import { useState } from 'react'

import './index.css'

function changer() {

    const [color,setColor] = useState('#11263A')

    return (
        <div class="w-full h-screen flex items-center justify-center"  style={{backgroundColor: color}}>


            <div class="absolute bottom-10 w-full flex justify-center">

                <div class="flex gap-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl px-6 py-4 rounded-3xl">


                    <button 
                        onClick={ () => {
                            setColor("red")
                        } }
                        class="px-5 py-2 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 hover:scale-110 transition duration-300 shadow-lg">
                        Red
                    </button>


                    <button
                        onClick={ () =>{
                            setColor("green")
                        }}
                        class="px-5 py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 hover:scale-110 transition duration-300 shadow-lg">
                        Green
                    </button>

                    <button
                        onClick={ ()=>{
                            setColor("blue")
                        }}
                        class="px-5 py-2 rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:scale-110 transition duration-300 shadow-lg">
                        Blue
                    </button>

                    <button
                        onClick={()=>{
                            setColor("purple")
                        }}
                        class="px-5 py-2 rounded-full text-white font-semibold bg-purple-500 hover:bg-purple-600 hover:scale-110 transition duration-300 shadow-lg">
                        Purple
                    </button>

                </div>

            </div>

        </div>
    )
}

export default changer
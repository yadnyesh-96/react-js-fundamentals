

function run() {
    return (
        <body class="flex items-center justify-center h-screen bg-gray-100">

            <div class="w-[400px] h-[100px] bg-white shadow-lg rounded-lg flex flex-col justify-between p-4">

               
                <div class="flex justify-center items-center flex-1">
                    <span class="text-3xl font-bold">1</span>
                </div>

         
                <div class="flex justify-between">
                    <button class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                        Button-A
                    </button>

                    <button class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                        Button-B
                    </button>
                </div>

            </div>
        </body>
    )
}

export default run;
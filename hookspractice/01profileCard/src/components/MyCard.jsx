
function MyCard(user) {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='grid grid-cols-1 grid-rows-2 gap-5 py-5 px-5 shadow-sm bg-slate-100 round rounded-3xl border border-slate-200'>
                <div className='justify-items-center text-center '>
                    <img className='mt-8 border shadow-slate-700 shadow-sm size-auto p-3 border-slate-600 rounded-full' src={user.img} alt="" />
                    <h1 className='my-1 font-semibold text-slate-600'>{user.name}</h1>
                    <h2 className='my-1 font-semibold text-slate-500'>{user.role}</h2>
                </div>

                <div className='flex  py-14 gap-8'>
                    <button className='font-semibold text-white bg-blue-500 border border-blue-300 shadow-slate-300 shadow-md  w-1/2 round  rounded-xl py-1 px-8'>Login</button>
                    <button className='font-semibold text-white bg-blue-500 border border-blue-300 shadow-slate-300 shadow-md  w-1/2 round  rounded-xl py-1 px-8'>SignIn</button>
                </div>
            </div>
        </div>
    );
}

export default MyCard;
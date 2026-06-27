import Card from "./Card";

function Movies() {
    return (
        <>
            <Card>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-medium border-b-2 pb-1">User Profile</h1>

                    <div className="flex items-center mt-5">
                        <h1 className="font-bold text-2xl">Name :</h1>
                        <h2 className="text-2xl mx-2">Yadnyesh</h2>
                    </div>

                    <div className="flex items-center mt-5">
                        <h1 className="font-bold text-2xl">City :</h1>
                        <h2 className="text-2xl mx-2">Pune</h2>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex flex-col items-center">
                    <h2>React Learning</h2>
                    <ul>
                        <li>Props</li>
                        <li>Children</li>
                        <li>Hooks</li>
                    </ul>
                </div>
            </Card>
        </>
    )
}

export default Movies;
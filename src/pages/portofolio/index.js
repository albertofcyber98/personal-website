import Navbar from "../../components/navbar"
import Card from "../../components/card"

const Project = () => {
    const Datas = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div>
            <Navbar />
                <h1 className="text-center font-medium text-3xl">My Portofolio</h1>
            <div className="justify-center mt-8 mx-8 mb-16 sm:mx-2 md:mx-5 flex-wrap sm:flex md:flex-wrap columns">
                {
                    Datas.map((data)=>(<Card key={data.id} no={data.id} />))
                }
            </div>
        </div>
    )
}

export default Project;
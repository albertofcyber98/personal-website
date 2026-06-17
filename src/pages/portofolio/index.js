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
        <div className="min-h-screen overflow-hidden bg-[#070B14] text-white">
            <Navbar />

            <section className="relative px-8 pt-[140px] pb-20 md:px-20 xl:px-[200px]">
                <div className="absolute left-[-120px] top-[140px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute right-[-150px] top-[220px] h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[130px]" />

                <div className="relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            Portfolio
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Selected{' '}
                            <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>

                        <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
                            A collection of web development and UI/UX works focused on clean
                            interfaces, responsive layouts, and modern digital experiences.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Datas.map((data) => (
                            <Card key={data.id} no={data.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
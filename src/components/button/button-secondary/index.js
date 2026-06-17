import { Link } from "react-router-dom"

const ButtonSecondary = () => {
    return (
        <Link to="/portofolio">
            <button className="mt-10 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300 sm:px-10 md:text-lg">
                View My Work
            </button>
        </Link>
    )
}

export default ButtonSecondary
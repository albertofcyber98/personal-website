import { Link } from "react-router-dom"

const ButtonSecondary = () => {
    return(
        <Link to=''>
            <button className='mt-10 px-10 py-3 text-base md:text-lg bg-[#868686] text-white rounded ml-6 hover:bg-[#646464] transition-all duration-1000'>
                View my work               
            </button>
        </Link >
    )
}
export default ButtonSecondary;
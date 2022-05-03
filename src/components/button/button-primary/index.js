import {Link} from 'react-router-dom'
const ButtonPrimary = () => {
    return (
        <Link to='/'>
            <button className='mt-10 px-10 text-base md:text-lg py-3 bg-[#00BC9A] text-white rounded filder:drop-shadow(0 2px 10px rgb(1,188,154/0.2)) hover:bg-[#049A7F] transition-all duration-1000'>
                Let's work                
            </button>
        </Link>
    )
}
export default ButtonPrimary;
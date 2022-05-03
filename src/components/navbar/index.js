import {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/' },
        { name: 'Project', link: '/project' }
    ]
    let [open , setOpen] = useState(false);
    return (
        <div className='h-[80px] bg-[#2D2E37]'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link to="/">
                        <h1 className='pl-3 md:pl-8 text-2xl logo-custom'><span className='text-white'>Yohanes.</span>Albert</h1>
                    </Link>
                </div>
                <div className='pr-8'>
                    <ul className='hidden md:flex'>
                        {
                            Links.map((Data) => (
                                <li key={Data.name} className='px-5 cursor-pointer text-white hover:text-gray-600'><Link to={Data.link} >{Data.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            <div className='md:hidden text-3xl pr-5 pt-2 cursor-pointer' onClick={()=>setOpen(!open)}>
                <ion-icon name={!open ? 'menu': 'close'}></ion-icon>
            </div>
            </div>
            <ul className={`md:hidden bg-[#2D2E37] transition-all duration-300 ease-in ${!open ? 'hidden' : 'absolute bg-color-primary w-full mt-[-10px] pb-4 shadow-md'}`}>
                {
                    Links.map((DataMini) => (<Link to={DataMini.link}>
                        <li key={DataMini.name} className='px-5 cursor-pointer py-3 text-white hover:text-gray-600 hover:bg-white'>{DataMini.name}</li></Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;
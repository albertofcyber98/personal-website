import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const Links = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Portfolio', link: '/portofolio' },
    ]

    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-[80px] w-full items-center justify-between px-8 md:px-20 xl:px-[200px]">
                <Link to="/" onClick={() => setOpen(false)}>
                    <h1 className="font-logo text-2xl font-bold tracking-wide">
                        <span className="text-white">ones</span>
                        <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                            daily
                        </span>
                        <span className="text-cyan-300">_</span>
                    </h1>
                </Link>

                <ul className="hidden items-center gap-10 md:flex">
                    {Links.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.link}
                                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="text-3xl text-white md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <ion-icon name={open ? 'close' : 'menu'} />
                </button>
            </div>

            <div
                className={`absolute left-0 top-[80px] w-full border-b border-white/10 bg-[#070B14]/95 px-8 py-5 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
                    open
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-4 opacity-0'
                }`}
            >
                <ul className="flex flex-col gap-2">
                    {Links.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.link}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-cyan-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
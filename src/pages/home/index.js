import Navbar from '../../components/navbar'
import ButtonPrimary from '../../components/button/button-primary'
import ButtonSecondary from '../../components/button/button-secondary'
import profil from '../../assets/profil.png'

const Home = () => {
    const sosialMedias = [
        { id: 1, link: 'https://dribbble.com/albert111198', logo: 'logo-dribbble' },
        { id: 2, link: 'https://www.instagram.com/yohanes_albert/', logo: 'logo-instagram' },
        { id: 3, link: 'https://www.linkedin.com/in/yohanes-albert/', logo: 'logo-linkedin' },
        { id: 4, link: 'https://github.com/albertofcyber98', logo: 'logo-github' },
    ]

    const skills = [
        'Crypto Dashboard',
        'Finance UI/UX',
        'Trading Platform',
        'Web3 Interface',
    ]

    const stats = [
        { id: 1, value: '5+', label: 'Years Experience' },
        { id: 2, value: 'Full', label: 'Stack Developer' },
        { id: 3, value: 'UI/UX', label: 'Finance Focused' },
    ]

    return (
        <div className="min-h-screen overflow-hidden bg-[#070B14] text-white">
            <Navbar />

            <section className="relative px-8 pt-[110px] md:px-20 lg:px-[50px] xl:px-[200px]">
                <div className="absolute left-[-120px] top-[120px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute right-[-120px] top-[80px] h-[350px] w-[350px] rounded-full bg-blue-700/20 blur-[130px]" />

                <div className="relative z-10 flex flex-col items-center justify-between gap-14 lg:flex-row">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            Web Developer & UI/UX Expert for Crypto Finance
                        </div>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Hi, I’m{' '}
                            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                Yohanes Albert
                            </span>
                        </h1>

                        <h2 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                            I build modern web interfaces for crypto, finance, and digital products.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
                            Based in Makassar, Indonesia. I help startups, creators, and finance-focused
                            businesses design and develop clean, responsive, and conversion-focused web
                            experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <ButtonPrimary />
                            <ButtonSecondary />
                        </div>

                        <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
                            {stats.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                                >
                                    <h3 className="text-2xl font-bold text-cyan-300">
                                        {item.value}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-400 md:text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-2xl">
                            {sosialMedias.map((sosialMedia) => (
                                <a
                                    key={sosialMedia.id}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={sosialMedia.link}
                                    className="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
                                >
                                    <ion-icon name={sosialMedia.logo} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[80px]" />

                        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
                            <img
                                src={profil}
                                alt="Yohanes Albert Profile"
                                className="w-[340px] rounded-[32px] object-cover xl:w-[420px]"
                            />

                            <div className="absolute bottom-8 left-[-40px] rounded-2xl border border-white/10 bg-[#0B1220]/90 p-4 shadow-xl backdrop-blur">
                                <p className="text-sm text-gray-400">Specialized in</p>
                                <h3 className="mt-1 font-semibold text-cyan-300">
                                    Crypto & Finance UI
                                </h3>
                            </div>

                            <div className="absolute right-[-35px] top-10 rounded-2xl border border-white/10 bg-[#0B1220]/90 p-4 shadow-xl backdrop-blur">
                                <p className="text-sm text-gray-400">Focus</p>
                                <h3 className="mt-1 font-semibold text-blue-300">
                                    Clean Dashboard UX
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
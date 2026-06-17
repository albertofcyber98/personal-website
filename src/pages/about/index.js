import Navbar from '../../components/navbar'
import profil from '../../assets/profil.png'

const About = () => {
    const services = [
        'Crypto & Finance Dashboard UI',
        'UI/UX Design',
        'Front-End Web Development',
        'Back-End Web Development',
    ]

    const sosialMedias = [
        { id: 1, link: 'https://dribbble.com/albert111198', logo: 'logo-dribbble' },
        { id: 2, link: 'https://www.instagram.com/yohanes_albert/', logo: 'logo-instagram' },
        { id: 3, link: 'https://www.linkedin.com/in/yohanes-albert/', logo: 'logo-linkedin' },
        { id: 4, link: 'https://github.com/albertofcyber98', logo: 'logo-github' },
    ]

    return (
        <div className="min-h-screen overflow-hidden bg-[#070B14] text-white">
            <Navbar />

            <section className="relative px-8 pt-[140px] md:px-20 xl:px-[200px]">
                <div className="absolute left-[-120px] top-[150px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute right-[-150px] top-[180px] h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[130px]" />

                <div className="relative z-10 grid min-h-[calc(100vh-140px)] items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            About Me
                        </p>

                        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                            I design and build digital products for{' '}
                            <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                                crypto, finance, and modern businesses.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
                            I’m Yohanes Albert, a Full-Stack Web Developer based in Indonesia.
                            I enjoy transforming complex ideas into clean, responsive, and
                            user-friendly web experiences.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
                            My focus is creating interfaces that look professional, feel easy to use,
                            and help users understand information clearly — especially in dashboard,
                            crypto, finance, and digital product environments.
                        </p>

                        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
                            {services.map((service) => (
                                <div key={service} className="flex items-center gap-3">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-300">
                                        ✓
                                    </span>
                                    <span className="text-gray-300">{service}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-7 text-2xl">
                            {sosialMedias.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
                                >
                                    <ion-icon name={item.logo} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden justify-center lg:flex">
                        <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-400/20 blur-[100px]" />

                        <div className="relative">
                            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full border border-cyan-300/30" />
                            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full border border-emerald-300/30" />

                            <img
                                src={profil}
                                alt="Yohanes Albert"
                                className="relative z-10 h-[460px] w-[360px] object-contain drop-shadow-2xl"
                            />

                            <div className="absolute bottom-10 left-[-60px] z-20">
                                <p className="text-sm text-gray-400">Specialized in</p>
                                <h3 className="text-xl font-semibold text-cyan-300">
                                    Finance UI/UX
                                </h3>
                            </div>

                            <div className="absolute right-[-40px] top-12 z-20">
                                <p className="text-sm text-gray-400">Role</p>
                                <h3 className="text-xl font-semibold text-emerald-300">
                                    Full-Stack Dev
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
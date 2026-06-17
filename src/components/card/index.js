import imgProjectNoprob from '../../assets/noprob.png'
import imgProjectStyle from '../../assets/style.png'
import imgProjectLumbung from '../../assets/lumbung_kaos.png'
import imgProjectAlbert from '../../assets/albert-store.png'
import { useState } from 'react'
import ListBuild from './listBuild'

const Card = ({ no = 0 }) => {
    const [open, setOpen] = useState(false)

    const dataProjects = [
        {
            idKey: 0,
            imgProject: imgProjectNoprob,
            title: 'Noprob',
            description: 'An online tour booking web application using Laravel.',
            link: 'http://noprob.my.id/',
        },
        {
            idKey: 1,
            imgProject: imgProjectStyle,
            title: 'Style Store',
            description: 'An online clothing store static web application.',
            link: 'https://style-store.netlify.app/',
        },
        {
            idKey: 2,
            imgProject: imgProjectLumbung,
            title: 'Lumbung Kaos',
            description: 'Company profile website for a plain t-shirt supplier in Makassar.',
            link: 'https://lumbungkaos.com/',
        },
        {
            idKey: 3,
            imgProject: imgProjectAlbert,
            title: 'Albert Store',
            description: 'A food ordering web application using MERN stack.',
            link: '/',
        },
    ]

    const project = dataProjects[no]

    if (!project) {
        return null
    }

    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07]">
            <a href={project.link} target="_blank" rel="noreferrer">
                <div className="relative h-[220px] overflow-hidden bg-white/5">
                    <img
                        src={project.imgProject}
                        alt={project.title}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent opacity-70" />
                </div>
            </a>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                    {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-gray-400">
                    {project.description}
                </p>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-cyan-300/30 hover:text-cyan-300"
                >
                    <span>Build with</span>
                    <ion-icon
                        name={
                            open
                                ? 'chevron-up-outline'
                                : 'chevron-down-outline'
                        }
                    />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        open
                            ? 'max-h-[300px] opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="pt-5">
                        <ListBuild noBuild={project.idKey} />

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-[#06111F] transition-all duration-300 hover:-translate-y-1 hover:from-cyan-300 hover:to-emerald-300"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
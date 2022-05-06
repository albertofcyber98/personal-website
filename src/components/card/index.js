import imgProjectNoprob from '../../assets/noprob.png'
import imgProjectStyle from '../../assets/style.png'
import imgProjectLumbung from '../../assets/lumbung_kaos.png'
import imgProjectAlbert from '../../assets/albert-store.png'
import {useState} from 'react'
import ListBuild from './listBuild';
const Card = (props) => {
    const [open, setopen] = useState(false);
    const dataProjects = [
        { idKey: 0, imgProject: imgProjectNoprob, title: 'Noprob', description: 'An online tour booking web application using laravel', link:'http://noprob.my.id/' },
        { idKey: 1, imgProject: imgProjectStyle, title: 'Style Store', description: 'An online clothing store static web application', link:'https://style-store.netlify.app/' },
        { idKey: 2, imgProject: imgProjectLumbung, title: 'Lumbung Kaos', description: 'Company profile from a plain t-shirt supplier company in Makassar', link:'https://lumbungkaos.com/' },
        { idKey: 3, imgProject: imgProjectAlbert, title: 'Albert Store', description: 'A food ordering web application using MERN', link:'/' },
    ]
    return (
        <div className="bg-white rounded h-fit hover:drop-shadow-[0_2px_6px_rgba(0,188,154,0.7)] mb-5 sm:mx-2 w-full sm:w-[45%] md:w-[45%] lg:w-[30%] xl:w-[22%] transition-all duration-500">
            <div className='overflow-hidden'>
                <img src={dataProjects[props.no].imgProject} className="rounded cursor-pointer md:scale-100 transition-all duration-500 ease-in-out hover:scale-125" alt="Project" />
            </div>
            <hr/>
            <div className='pt-6 px-4 md:px-4'>
                <h1 className="font-medium text-xl">{dataProjects[props.no].title}</h1>
                <p className="text-gray-400 pt-2 text-md font-normal">{dataProjects[props.no].description}</p>
                <div className='text-center text-3xl pt-2 pb-2'>
                    <span className="cursor-pointer" onClick={()=>setopen(!open)}>
                        <ion-icon name={`${!open ?'arrow-down-circle-outline': 'arrow-up-circle-outline'}`}/>
                    </span>
                </div>
                <div className={`mt-[-10px] pb-6 ${!open? 'hidden':''}`}>
                    <h4 className='font-medium'>Build with:</h4>
                    <ListBuild noBuild={dataProjects[props.no].idKey} />
                    <div className="text-center mt-4">
                        <a href={dataProjects[props.no].link} target="_blank" rel='noreferrer' className="border-2 border-[#00BC9A] rounded-md px-8 py-2 hover:bg-[#00BC9A] hover:text-white transition-all duration-300">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
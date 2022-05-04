import imgProjectNoprob from '../../assets/noprob.png'
import imgProjectStyle from '../../assets/style.png'
import {useState} from 'react'
import ListBuild from './listBuild';
const Card = (props) => {
    const [open, setopen] = useState(false);
    const dataProjects = [
        { idKey: 0, imgProject: imgProjectNoprob, title: 'Noprob', description: 'Travel travel booking website' },
        { idKey: 1, imgProject: imgProjectStyle, title: 'Style Store', description: 'Online clothes shop static app' },
        { idKey: 2, imgProject: imgProjectNoprob, title: 'Product Tani', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { idKey: 3, imgProject: imgProjectNoprob, title: 'Noprob', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    ]
    return (
        <div className="bg-white rounded h-fit hover:drop-shadow-[0_2px_6px_rgba(0,188,154,0.7)] mb-5 sm:mx-2 w-full sm:w-[45%] md:w-[45%] lg:w-[30%] xl:w-[22%] transition-all duration-500">
            <div>
                <img src={dataProjects[props.no].imgProject} className="rounded" alt="Project" />
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
                    <ListBuild noBuild={dataProjects[props.no].idKey}/>
                </div>
            </div>
        </div>
    )
}
export default Card;
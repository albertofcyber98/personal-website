import Navbar from '../../components/navbar'
import ButtonPrimary from '../../components/button/button-primary';
import ButtonSecondary from '../../components/button/button-secondary';
import { Link } from 'react-router-dom';
import profil from '../../assets/profil.png'

const Home = () => {
    const sosialMedias = [
        {id: 1, link: 'https://dribbble.com/albert111198', logo:'logo-dribbble' },
        {id: 2, link:'https://www.instagram.com/yohanes_albert/' , logo:'logo-instagram'},
        {id: 3, link:'https://www.linkedin.com/in/yohanes-albert/', logo:'logo-linkedin'},
    ]
    return (
        <div>
            <Navbar />
            <div className='pl-5 pr-5 md:pl-20 md:pr-20 mt-[80px]  md:mt-[100px] flex justify-between'>
                <div>
                    <h1 className='text-4xl md:text-5xl font-bold transition-all duration-1000'><span className='text-white'>Hi, </span>I’m Yohanes Albert</h1>
                    <h2 className='text-white mt-4 text-xl md:text-2xl transition-all duration-1000'>Full-Stack Web Developer</h2>
                    <p className='mt-6 text-base md:text-lg text-gray-500 transition-all duration-1000'>Based in Makassar, South Sulawesi,<br/>
                        Indonesia</p>
                    <h2 className='text-white text-xl md:text-2xl mt-12 transition-all duration-1000'>Let’s collaborate on your next design project</h2>
                    <div>
                        <ButtonPrimary />
                        <ButtonSecondary />
                    </div>
                    <div className='text-2xl mt-20'>
                        {
                            sosialMedias.map((sosialMedia) => (
                        <Link key={sosialMedia.id} to={sosialMedia.link} className='text-gray-400 mr-10 hover:text-gray-600 transition-all duration-300'>
                            <ion-icon name={sosialMedia.logo}/>
                        </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='w-2/6 mt-[-50px] mr-[190px] hidden lg:block'>
                    <img src={profil} alt="BigCo Inc. logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home;
import Navbar from "../../components/navbar";
import profil from '../../assets/profil.png'

const About = () => {
    const DataChecks = [
        { id: 1, title: 'UI/UX Design' },
        { id: 2, title: 'Front-End Web Developer' },
        { id: 3, title: 'Back-End Web Developer'},
    ]
    return (
        <div>
            <Navbar />
                <div className="py-10 bg-white mt-[60px] md:mt-[100px] lg:mt-[120px] mx-[5%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%] rounded hover:drop-shadow-[0_2px_6px_rgba(0,188,154,0.7)] transition-all duration-500">
                <h1 className="text-center text-3xl font-medium">About Me</h1>
                    <div className="justify-between flex">
                        <div className="px-8 pt-5 text-[#2D2E37]">
                                <p>I'm from Indonesia and Full-time freelancer.
                                    I am a person who is very interested in technology, especially
                                    what I focus on is web development. The rapid development of
                                    technology makes me very excited to hone my skills</p>
                                <p className="pt-3 pb-2 font-medium">
                                    Service offerings I offer:
                                </p>
                                {
                                    DataChecks.map((DataCheck) => (
                                        <div className="flex" key={DataCheck.id}>
                                            <div className="pt-[2px]">
                                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                                            </div>
                                            <div className="pl-3">{DataCheck.title}</div>
                                        </div>
                                    ))
                                }
                        </div>
                        <div className="pr-5 pt-8 hidden lg:block">
                            <img src={profil} className="w-full" alt="Photo Profile"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About;
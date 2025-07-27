import { MdEmail } from "react-icons/md";
import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";

function MainContent(){
    return (
        <main className="mainContent">
            <div>
                <img 
                    className="ava" 
                    src="https://files.worldwildlife.org/wwfcmsprod/images/Polar_Bear_WW225900/story_full_width/82vwzbxa5k_pb_Original_WW225900.jpg" 
                    alt="Avatar"/>
                <h2 className="name">Viet Anh Dinh</h2>
                <p className="role">Software Engineer</p>
                <div className="list_info_button">
                    <a className="email_button" href="">
                       <MdEmail className="mr-2" />
                        Email
                    </a>
                    <a className="linkdin_button" href="">
                        <FaLinkedin />
                        Linkdin
                    </a>
                </div>
                <div className="about"> 
                    <h3>About</h3>
                    <p>I'm a software developer passionate about using technology to make the world more convenient and connected. 
                        I believe that well-crafted software can improve lives in meaningful ways — from simplifying everyday tasks to solving complex challenges. 
                        My goal is to continually grow as a developer and use my skills to build tools and applications that help people, making life better, step by step.
                    </p>
                </div>
                <div className="interest">
                    <h3>Interests</h3>
                    <p>I'm a lifelong learner who enjoys exploring new ideas, tools, and technologies. 
                        Outside of work, I love traveling and discovering different cultures, which inspires my creativity and broadens my perspective. 
                        I'm always looking for new things to learn — whether it's a language, a skill, or simply a new way of thinking.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default MainContent
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";

function MainContent(){
    return (
        <main className="mainContent">
            <div>
                <img className="ava" src="https://files.worldwildlife.org/wwfcmsprod/images/Polar_Bear_WW225900/story_full_width/82vwzbxa5k_pb_Original_WW225900.jpg" alt="Avatar"/>
                <h2>Viet Anh Dinh</h2>
                <p className="role">Software Engineer</p>
                <div className="list_info_button">
                    <a className="email_button" href="">
                       <MdEmail className="mr-2" />
                        Email
                    </a>
                    <a className="linkdin_button" href="">Linkdin</a>
                </div>
                <div>
                    <h3>About</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p></p>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default MainContent
import { FaFacebookF, FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <footer>
            <nav>
                <ul className="footer_list">
                    <li className="socialBtn">
                        <a><FaFacebookF style={{ color: 'black'}}/></a>
                    </li>
                    <li className="socialBtn">
                        <a><FaGithub style={{ color: 'black'}}/></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
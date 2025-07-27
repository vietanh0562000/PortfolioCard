import { FaFacebookF, FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <footer>
            <nav>
                <ul className="footer_list">
                    <li className="socialBtn">
                        <a href="https://www.facebook.com/vietanh.R.11"><FaFacebookF style={{ color: 'black'}}/></a>
                    </li>
                    <li className="socialBtn">
                        <a href="https://github.com/vietanh0562000"><FaGithub style={{ color: 'black'}}/></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
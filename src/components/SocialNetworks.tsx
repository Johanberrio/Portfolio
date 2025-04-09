import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function SocialNetworks(){

    return (

        <>  
            <a href="https://github.com/Johanberrio">
                <FaGithub className="text-color:#8D9196 text-4xl hover:text-[#FF5449] transition duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/johan-berrio/">
                <FaLinkedin   className="text-color:#8D9196 text-4xl hover:text-[#FF5449] transition duration-300"/>
            </a>
            <a href="mailto:juandrak@msn.com">
                <MdEmail className="text-color:#8D9196 text-5xl hover:text-[#FF5449] transition duration-300"/>
            </a>

        </>
    )
}
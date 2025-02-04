import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({className, children, links}) => {
;
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(null);
    const handleClick = (index) => {setIsActive(index)}

    return ( 
        <nav className={`navbar ${className}`}>
            <h1 className="nav-logo"><i className="bi bi-transparency text-4xl"></i> GlassUI</h1>
            <div className="flex flex-grow justify-center">
                {links.map((link, index) => (
                <a href="#" key={index} className={`nav-links ${isActive == index && 'nav-links-active'}`}
                 onClick={()=>{handleClick(index); navigate(`/${link.toLowerCase()}`);}}
                 >{link}
                </a> )
            )} 
            </div>
            {children}
        </nav>
     );
}
 
export default Navbar;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Notification from "./Notification";
import ToggleDark from "./ToggleDark";

const Navbar = ({className, children, links}) => {
    const isMobile = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(null);
    const handleClick = (index) => {setIsActive(index)}

    const ListLinks = () => <div className={`flex md:flex-grow ${isMobile ? 'flex-col' : 'justify-center'}`}>
        {links.map((link, index) => (
            <a href="#" key={index} className={`nav-links ${isActive == index && 'nav-links-active'}`}
            onClick={()=>{handleClick(index); navigate(`/${link.toLowerCase()}`);}}
            >{link}
            </a> )
        )} 
        </div>;

    return ( 
        <nav className={`navbar ${className}`}>
            <h1 className="nav-logo"><i className="bi bi-transparency text-4xl"></i><span className="hidden md:inline-block">GlassUI</span></h1>
 

            {!isMobile ?
                <><div className="flex-grow mx-auto flex"><ListLinks /></div><Notification /><ToggleDark /> </>
             : 
                <> <div className="ms-auto flex max-xs:hidden">{children}</div> <div className="text-black dark:text-white ms-auto nav-links" onClick={() => setIsOpen(true)}><i className="fa-solid fa-bars"></i></div> </>
            }


            <div className={`fixed inset-0 bg-black/50 transition-all duration-150 ease-in-out ${isMobile && isOpen ? 'z-50  opacity-100' : '-z-50 opacity-0'}`} onClick={() => setIsOpen(false)}>
                <div className={`px-2 py-4 flex flex-col relative text-black ms-auto min-h-screen w-72 sm:w-1/2 bg-gray-300 dark:bg-zinc-900 dark:text-black transition-all duration-150 ${isMobile && isOpen ? 'z-50  translate-x-0' : 'z-[-50] translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-2 left-2 text-black dark:text-white" onClick={() => setIsOpen(false)}>X</button>
                    <h1 className="nav-logo text-center my-5"><i className="bi bi-transparency text-4xl"></i> GlassUI</h1>
                    <ListLinks />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
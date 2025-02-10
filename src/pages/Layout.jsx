import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ToggleDark from '../elements/ToggleDark'
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Layout = () => {
    return ( 
        <div className="min-h-screen bg-cover bg-fixed overflow-hidden bg-[url('/bg-gradient-light.jpg')] dark:bg-[url('/bg-gradient-dark.jpg')]">
            <Navbar className="" links={['Home','Blogs']}>
                <Dropdown className="my-auto px-3" label="Options">
                    <a className="dropdown-item"><i className="fa-solid fa-magnifying-glass dropdown-item-icon"></i> View</a>
                    <a className="dropdown-item"><i className="fa-solid fa-pen dropdown-item-icon"></i> Edit</a>
                    <div className="dropdown-border"/>
                    <a className="dropdown-item" ><i className="fa-solid fa-trash-can dropdown-item-icon"></i> Delete</a>
                </Dropdown>
                <ToggleDark />    
            </Navbar>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;
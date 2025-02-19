import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return ( 
        <div className="w-screen h-screen bg-cover bg-fixed overflow-scroll bg-[url('/bg-gradient-light.jpg')] dark:bg-[url('/bg-gradient-dark.jpg')]">
            <Navbar className="" links={['Home','Blogs']}/> 
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;
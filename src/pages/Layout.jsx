import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return ( 
        <div className="min-h-screen bg-cover bg-fixed overflow-hidden bg-[url('/bg-gradient-light.jpg')] dark:bg-[url('/bg-gradient-dark.jpg')]">
            <Navbar className="" links={['Home','Blogs']}/> 
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;
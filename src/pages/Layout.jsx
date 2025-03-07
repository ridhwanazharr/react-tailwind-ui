import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return ( 
        <div className="w-screen h-screen overflow-scroll bg-cover bg-fixed bg-[url('/bg-1.jpg')] dark:bg-[url('/bg-1-dark.jpg')]">
            <Navbar links={['Home','Blogs']}/> 
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";


const MainLayout = () => {
    return (
        <>
           <div className="px-20">
           <Header/>
           <Outlet/>
           </div>
            <Footer/>
        </>
    );
};

export default MainLayout;
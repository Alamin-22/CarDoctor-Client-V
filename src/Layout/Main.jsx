import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/NavBar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
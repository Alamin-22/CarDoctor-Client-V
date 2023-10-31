
import Navbar from "../../Components/Header/NavBar";
import error from "../../assets/images/error/error.png"


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center ">
                <img src={error} className=" mt-24  w-1/2 h-full" alt="Error Page" />
            </div>
        </div>
    );
};

export default Error;
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);

    const NavLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        {
            user?.email &&
            <li><NavLink to={"/bookings"}>Bookings</NavLink></li>
        }
        <li><NavLink to={"/contact"}>Contact</NavLink></li>

    </>

    const handleLogout = () => {
        Logout()
            .then(() => {
                axios.post("http://localhost:5000/log-out", {}, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch()
    }



    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn "><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogout} className="btn btn-error text-white rounded-full">LogOut</button> :
                            <Link to='/login'>
                                <button className="btn  btn-error btn-outline">Appointment</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
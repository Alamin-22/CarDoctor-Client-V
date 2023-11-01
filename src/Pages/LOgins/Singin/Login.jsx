import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login/login.svg"

import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {

    // const { Singin } = useContext(AuthContext);

    const { Singin }= useAuth();


    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        // login

        Singin(email, password)
            .then(res => {
                Swal.fire('Congratulations!', 'Login Successful', 'success');

                const LoggedInUser = res.user;
                console.log(LoggedInUser);
                const user = { email };
                // get access token

                axios.post("https://car-doctor-server-ruddy-kappa.vercel.app/jwt", user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : "/");
                        }
                    })


            })
            .catch(error => {
                console.log(error);
                Swal.fire('Oops!!', `${error.message}`, 'error');
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-12 w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:bg-[#ff3911bb]">Login</button>
                        </div>
                        <p className="text-center">New to CarDoctor <Link to={"/register"} className="text-[#ff3911bb] font-semibold text-lg">Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
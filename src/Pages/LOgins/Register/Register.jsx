import { Link } from "react-router-dom";
import login from "../../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {

    const { CreateUser } = useContext(AuthContext);





    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const LoginData = { name, email, password }
        console.log(LoginData);
        // Create user 


        CreateUser(email, password)
            .then(res => {
                const user = res.user;
                Swal.fire('Congratulations!', 'Registration Successful', 'success');
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                Swal.fire('Sorry!!', `${error.message}`, 'error');
            })



    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" mr-12 w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                            <p className="text-center">Have An Account? <Link to={"/login"} className="text-[#ff3911bb] font-semibold text-lg">SingIn</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
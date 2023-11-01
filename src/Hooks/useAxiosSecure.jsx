import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
    baseURL: "https://car-doctor-server-ruddy-kappa.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { Logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("error dhorakhaise in the interceptor", error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("Logout the user")
                // Logout()
                //     .then(() => {
                //         navigate("/login")
                //     })
                //     .catch()
            }
        })
    }, [Logout, navigate])

    return axiosSecure;
};

export default useAxiosSecure;
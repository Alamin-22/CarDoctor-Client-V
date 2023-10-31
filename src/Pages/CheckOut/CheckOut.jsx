import { useLoaderData } from "react-router-dom";
import CheckOutBanner from "../../Components/Header/CheckOutBanner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {

    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleCheckOutService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const bookings = {
            customerName: name, img,
            email, date, service_title: title, service_id: _id, price,
        }
        console.log(bookings);

        // fetch

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookings)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire( 'Good job!', 'booking Successful!', 'success' )
            }
        })


    }


    return (
        <div>
            <CheckOutBanner></CheckOutBanner>
            <div>
                <h2 className='text-center text-3xl'>Book Service: {title} </h2>
                <form onSubmit={handleCheckOutService} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.name} name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" defaultValue={"$" + price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default CheckOut;
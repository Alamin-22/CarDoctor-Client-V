import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./Components/ServiceCard";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <>
            <div>
                <h1 className="text-[#FF3811] text-3xl font-bold text-center">Service</h1>
                <h2 className="text-5xl font-bold text-center mt-5">Our Service Area</h2>
                <p className="text-[#737373] w-2xl text-center mt-5">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Service;
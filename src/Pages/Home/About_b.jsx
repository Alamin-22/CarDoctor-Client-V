import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About_b = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 mt-8  md:mt-1">
                    <h1 className="text-5xl font-bold text-[#FF3811]">About Us</h1>
                    <p className="py-6 text-5xl  ">We are qualified & of experience in this field</p>
                    <p className="py-2 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p className="py-2 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white hover:bg-[#ff5f54]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About_b;
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} className='h-64' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {title}
                    </h2>
                    <div className='flex items-center'>
                        <p className='text-2xl font-semibold text-[#FF3811]'> Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <AiOutlineArrowRight className=' text-[#FF3811]' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceCard;






import img from '../../assets/images/checkout/checkout.png';
const CheckOutBanner = () => {
    return (
        <div>
            <div className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-xl ">
                    <h1 className='text-5xl absolute top-1/2 ml-28 text-white font-bold'>Check Out</h1>
                    <div className='flex justify-center'>
                        <div className='absolute bottom-0 '>
                            <div className='relative'>
                                <p className='absolute ml-16 pl-3 mt-2 text-white font-medium text-xl'>Home/Checkout</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="296" height="50" viewBox="0 0 296 50" fill="none">
                                    <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutBanner;
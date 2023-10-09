import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import { FaArrowRightLong } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { id, title, price, image, paragraph } = service;
    return (
        <div>
            
            
            <div className="bg-white rounded-xl h-[600px]">
                <img className="rounded-t-xl h-[250px] w-full" src={image} alt="" />
                    <div className="px-6">
                            <p className="font-normal text-2xl py-3">{title}</p>
                            <p className="font-semibold text-2xl text-[#ff6600]">$ {price}</p>
                            <p className="text-justify my-3 h-[170px]">{paragraph}</p>
                            <Link to={`/services/${id}`}>
                    <div className="text-center">
                    
                                <button className="w-2/3 rounded-3xl h-10 text-lg bg-[#ff6600] hover:bg-orange-600 text-white font-semibold hover:text-white ">See Details </button>
                    </div>
                    </Link>
                    </div>

            </div>
                
        </div>
    );
};

export default ServiceCard;



ServiceCard.propTypes = {
    service: PropTypes.object
}
import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types';

const Service = ({ service }) => {
    
 
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-10">Our Services</h2>
            {/* <hr className=" w-2/3 mx-auto"/> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-16 lg:my-24 max-w-[1300px] mx-auto p-3 lg:p-0'>
                
                {
                    service.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
        </div>
        </div>
    );
};

export default Service;


Service.propTypes = {
    service: PropTypes.array
}
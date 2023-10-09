import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Service = ({ service }) => {
    useEffect(() => {
        AOS.init();
      }, [])
      
 
    return (
        <div className="my-24">
<div className="text-center" data-aos="fade-up">
            <h3 className="text-5xl font-semibold">Our Main Services</h3>
                <p className="text-grey text-xl mt-5 lg:w-1/2 p-4 lg:p-0 mx-auto mb-16">At <span className="text-[#ff6600] text-xl font-medium mt-5 mb-16">EventyfyEDU</span>, we pride ourselves on delivering our core services with the utmost professionalism and dedication, ensuring your satisfaction on every step</p>
            </div>




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
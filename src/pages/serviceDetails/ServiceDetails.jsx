import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = ({ services }) => {
    console.log(services);
    const { id } = useParams();
    const serviceData = useLoaderData();
    const serviceCard = serviceData.find((service) => service.id === parseInt(id));
console.log(serviceCard);
    return (
        <div>
            <div>
                <h1 className="font-bold text-5xl mt-14 mb-7">{serviceCard.title}</h1>
                <p className="leading-8 text-justify mb-14 text-slate-500 font-normal text-base">{serviceCard.paragraph}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;



ServiceDetails.propTypes = {
    services: PropTypes.object
}
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";

const ServiceDetails = ({ services }) => {
  console.log(services);
  const { id } = useParams();
  const serviceData = useLoaderData();
  const serviceCard = serviceData.find(
    (service) => service.id === parseInt(id)
  );

  console.log(serviceCard);
  return (
    <div className="max-w-[1300px] mx-auto">
      <h1 className="font-bold text-4xl mt-32 mb-7 flex gap-4 items-center">
        <strong className="bg-[#ff6600] w-1 h-6"></strong>
        {serviceCard.title}
      </h1>

      <div className="flex gap-5 mt-20 items-center">
        <img
          className="w-1/3 rounded-lg border-2 border-orange-600 border-solid "
          src={serviceCard.image}
          alt=""
        />
        <div>
          <p className="text-lg mb-2">
            {moment().format("dddd, MMMM Do YYYY")} | By Alex Jones
          </p>
          <p className="leading-7 text-justify mb-10 text-slate-500 font-normal text-sm">
            {serviceCard.paragraph}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="py-6 text-justify w-full leading-6">
          <span className="text-[#ff6600] text-xl font-medium">Purpose: </span>
          {serviceCard.description}

          <br />
        </p>

        <button className=" px-6 py-3 rounded-xl text-white font-medium text-lg bg-[#ff6600] hover:bg-orange-600 hover:text-white ">
          Book Event
        </button>
      </div>

      <div className="text-white">
        <div
          className="p-14 h-64 my-24"
          style={{ backgroundImage: "url(https://i.ibb.co/9NpbqGc/share.png)" }}
        >
          <div className="flex justify-between items-center mt-6">
            <div className="bg-[#ff6600] px-5 py-2 rounded-md  bg-opacity-90">
              <h2 className="text-4xl font-semibold mb-2">
                Share the knowledge with your friends
              </h2>
              <p className="text-xl font-medium">
                Enjoy and explore a great Experience at the event...
              </p>
            </div>

            <button className="btn btn-ghost px-10 mr-40 text-xl bg-white text-[#ff6600] hover:text-white rounded-md">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

ServiceDetails.propTypes = {
  services: PropTypes.object,
};

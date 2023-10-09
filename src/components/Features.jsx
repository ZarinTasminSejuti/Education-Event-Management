import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setData(data))
      AOS.init();
  }, [])

  
  return (
    <div className="max-w-[1300px] mx-auto mt-24 mb-32">
      <div className="text-center pb-8 " data-aos="fade-up">
        <h1 className="text-5xl font-semibold">Our Features</h1>
        <p className="text-grey text-xl mt-5 lg:w-1/2 p-4 lg:p-0 mx-auto lg:mb-16">We take pride in offering a comprehensive set of features that are not only user-friendly but also adaptable to your unique requirements.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-0 lg:gap-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex gap-6 hover:bg-orange-100 shadow-md p-8"
            data-aos="flip-up"
          >
            <div className="p-2 border border-solid border-gray-200 flex justify-center items-center h-2/6 lg:h-1/2 mt-5 rounded-full">
              <FaStar className="text-3xl  text-[#ff6600]"></FaStar>
            </div>

            <div>
              <h3 className="text-2xl pb-3">{service.title}</h3>
              <p className="text-sm text-justify text-gray-500 pb-2">
                {service.description}
              </p>
              <strong className="bg-[#ff6600] block w-10 h-1"></strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

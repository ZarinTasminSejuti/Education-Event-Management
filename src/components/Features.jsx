import Data from "../../public/data.json"
import { FaStar } from "react-icons/fa";

const Features = () => {
 

    return (  
        <>
            <div className=" pb-8">
                <h1 className="text-4xl">Our Main Services</h1>
                <span>Ipsum dolor sit amet, consectetuer adipiscing elit consectetuer</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
            {Data.map((service, index) => (
               
                <div key={index} className="flex gap-5 border-[1px] border-solid border-gray-200  p-8">
                  
                    <div className="p-5 border-[1px] border-solid border-gray-200 rounded-full">
                    <FaStar className="text-5xl text-amber-500"></FaStar>
                    </div> 
            
                  
                    <div>
                    <h3 className="text-2xl pb-3">{service.title}</h3>
                    <p className="text-sm text-gray-500 pb-2">{service.description}</p>
                    <strong className="bg-sky-500 block w-8 h-1"></strong>
                    </div>
             </div>
            ))}
             </div>
        </>


    
      )};

export default Features;
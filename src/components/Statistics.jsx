import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Statistics = () => {
    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        
    };
    
    useEffect(() => {
        AOS.init();
      }, [])
     
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className="flex relative justify-between p-24 text-center my-10 items-center" style={{ backgroundImage: 'url(https://i.ibb.co/xSvKTR7/seminarS.jpg)' }}>
            <div style={overlayStyle}></div>



            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around w-full">
            <div className="text-center text-white relative z-10">
                <p className="text-5xl font-bold">598</p>
                <strong className="bg-[#ff6600] inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">EVENTS ORGANIZED</p>
            </div>
            
            <div className="text-center text-white relative z-10">
                <p className="text-5xl font-bold">16173</p>
                <strong className="bg-[#ff6600] inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">ACTIVE USERS</p>
            </div>
            
            <div className="text-center text-white relative z-10">
                <p className="text-5xl font-bold">116874</p>
                <strong className="bg-[#ff6600] inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">TICKETS SOLD</p>
            </div>
            </div>
            
       </div>
    );
};

export default Statistics;
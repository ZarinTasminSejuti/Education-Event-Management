import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Sponsor = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
    return (
        <div className="my-24">
            <div className="text-center" data-aos="fade-down">
            <h3 className="text-5xl font-semibold">Our Sponsors</h3>
                <p className="text-grey text-xl mt-5 mb-16">Opportunities are Unlocking Event Success through Strategic Sponsorship</p>
            </div>
            
            
            <Marquee pauseOnHover={true} speed={100}>
            <div className="flex gap-28">
                <img className="w-full h-14" src="src/assets/gpt.png" alt="" />
                    <img src="src/assets/figma.png" alt="" />
                    <img src="src/assets/google.png" alt="" />
                    <img className="w-full h-14" src="src/assets/business.png" alt="" />
                    <img src="src/assets/telerama.png" alt="" />
                    </div>
                </Marquee>

    </div>
    );
};

export default Sponsor;
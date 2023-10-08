import Marquee from "react-fast-marquee";
const Sponsor = () => {
    return (
        <div>
            <div>
            <h3 className="text-4xl font-bold text-center">Our Sponsors</h3>
                <p className="text-grey">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                <img src="../assets/figma.png" alt="" />
            </div>
            
            
            <Marquee pauseOnHover={true} speed={100}>
            <div className="flex gap-20">
                <img className="w-full h-14" src="src/assets/gpt.png" alt="" />
                    <img src="src/assets/figma.png" alt="" />
                    <img src="src/assets/google.png" alt="" />
                    <img className="w-full h-14" src="src/assets/business.png" alt="" />
                    <img src="src/assets/telerama.png" alt="" />
                    </div>
                </Marquee>
              

            
            {/* <div className="sponsors-img-gallery">
                <img src="./images/sponsors/spotify.png" alt="">
                <img src="./images/sponsors/amazon.png" alt="">
                <img src="./images/sponsors/google.png" alt="">
                <img src="./images/sponsors/telerama.png" alt="">
                <img src="./images/sponsors/figma.png" alt="">
            </div> */}
    </div>
    );
};

export default Sponsor;
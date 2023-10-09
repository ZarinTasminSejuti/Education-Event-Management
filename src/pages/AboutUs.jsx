import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutUs = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      {/* who we are section  */}
      <div className="hero mt-36">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/HhLJ399/about1.jpg"
            className="max-w-sm rounded-lg border-2 border-orange-600 border-solid shadow-xl"
            data-aos="zoom-in"
          />
          <div>
            <div className="flex gap-4 items-center">
              <strong className="bg-[#ff6600] w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Who We Are</h1>
            </div>

            <p className="py-6 text-justify w-3/4">
              We are a passionate team of educators, technologists, and event
              management experts with a shared vision: to empower educational
              institutions, businesses, and event organizers to deliver
              exceptional experiences. With our innovative solutions, we are
              committed to simplifying the complexities of education and event
              management, making it accessible, efficient, and engaging.
            </p>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="hero my-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-3/4">
            <div className="flex gap-4 items-center">
              <strong className="bg-[#ff6600] w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Our Mission</h1>
            </div>

            <p className="py-6 text-justify">
              Our mission is to bridge the gap between knowledge seekers and
              knowledge providers. We believe that education and events should
              be seamless, interactive, and tailored to individual needs.
              Through cutting-edge technology and a commitment to excellence, we
              strive to create solutions that enrich learning, foster
              networking, and drive success.
            </p>
          </div>
          <div className="w-3/4">
            <img
              src="https://i.ibb.co/QcgJtjq/about02.jpg"
              className="max-w-sm rounded-lg shadow-xl border-2 border-orange-600 border-solid "
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* who Choose Us  */}
      <div className="hero mb-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/symDb0Y/about2.jpg"
            className="max-w-sm rounded-lg shadow-xl border-2 border-orange-600 border-solid "
            data-aos="zoom-in"
          />
          <div>
            <div className="flex gap-4 items-center">
              <strong className="bg-[#ff6600] w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Why Choose Us</h1>
            </div>

            <p className="py-6 text-justify w-3/4 leading-6">
              <span className="text-[#ff6600] text-xl font-medium">
                Expertise:
              </span>{" "}
              With years of experience in education and event management, we
              understand your unique challenges and opportunities. <br />
              <span className="text-[#ff6600] text-xl font-medium">
                Innovation:
              </span>{" "}
              We are constantly evolving to stay ahead of industry trends and
              deliver the most advanced solutions.
              <br />
              <span className="text-[#ff6600] text-xl font-medium">
                Collaboration:
              </span>
              We work closely with our clients to tailor our services to their
              specific needs, ensuring success and satisfaction.
              <br />
              <span className="text-[#ff6600] text-xl font-medium">
                Results:
              </span>{" "}
              Our track record of successful implementations and satisfied
              clients speaks for itself.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AboutUs;

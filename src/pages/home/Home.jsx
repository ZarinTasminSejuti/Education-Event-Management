import Sponsor from "../../components/Sponsor";
import Footer from "../Footer";
import Banner from "./Banner";
import Features from "../../components/Features";
import Service from "../../components/service/Service";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Service service={service}></Service>
            <Features></Features>
            <Sponsor></Sponsor>
            <Footer></Footer>
        </div>
    );
};


   



export default Home;

import { Outlet } from 'react-router-dom';
import Navbar from '../pages/navbar/Navbar';

const Root = () => {
    return (
        <div className='mx-auto max-w-[1440px]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
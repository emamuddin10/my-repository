
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' font-poppins font-bolt md:max-w-screen-lg mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
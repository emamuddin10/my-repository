import moment from 'moment/moment';
import logo from '../../../src/assets/img/logo.png'

const Header = () => {
    return (
        <div>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg text-center mt-2'>Journalism Without Fear or Favour</p>
            <p className='text-lg text-center mt-2'>{moment().format("dddd, MMMM D YYYY") } </p>
            <h1>header</h1>
        </div>
    );
};

export default Header;
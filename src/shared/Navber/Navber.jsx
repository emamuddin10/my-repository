import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/img/user.png"

const Navber = () => {
    const link = <>
          <li><NavLink to = "/">Home</NavLink></li>
          <li><NavLink to = "/">About</NavLink></li>
          <li><NavLink to = "/">Career</NavLink></li>
               
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {link}
                </ul>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {link}
              </ul>
            </div>
            <div className="navbar-end">
               <img className="w-10 mr-4" src={userDefaultPic} alt="" /> 
              <Link to ="/login">
              <button className="btn btn-neutral">Login</button>
              </Link>
            </div>
        </div>
    );
};

export default Navber;
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const Links =
    <>
    <li><button className="btn-nav"><NavLink to="/">Home</NavLink></button></li>
    <li><button className="btn-nav"><NavLink to="/listedbook">Listed Books</NavLink></button></li>
    <li><button className="btn-nav"><NavLink to="/pagestoread">Pages to Read</NavLink></button></li>
    </>
    return (
        <div className="navbar bg-base-100 worksans">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow menu-container ">
              {Links}
            </ul>
          </div>
          <a className=" text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex  ">
          {Links}
          </ul>
        </div>
        <div className="navbar-end">
         <div className="flex gap-4 ">
         <a className="btn bg-primary text-white">Sign in</a>
         <a className="btn bg-[#59C6D2] text-white">Sign up</a>
         </div>
        </div>
      </div>
    );
};

export default Header;
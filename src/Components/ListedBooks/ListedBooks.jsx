import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => { 
  
    return (
        <div>
            <div className="bg-[#1313130D] rounded-2xl">
                <h3 className="text-center font-bold text-3xl py-8">Books</h3>
            </div>
            <div className="text-center my-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-primary text-white">Sort By <IoIosArrowDown></IoIosArrowDown></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="font-semibold text-lg flex gap-6">
                <button><NavLink to="/listedbook/read">Read</NavLink></button>
                <button><NavLink to="/listedbook/wishlist">WishList</NavLink></button>
            </div>
            <hr className="my-4"/>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
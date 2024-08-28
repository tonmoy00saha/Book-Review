import { Link } from 'react-router-dom';
import cover from '../../Images/pngwing 1.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-3xl px-[120px] py-20 flex justify-between items-center my-12">
            <div className='space-y-12'> 
                <h2 className='playfair text-[56px] font-bold'>Books to freshen up your bookshelf</h2>
                <Link to="/listedbook" className="btn bg-primary text-white">View The List</Link>
            </div>
            <div>
                <img src={cover} alt="" />
            </div>
        </div>
    );
};

export default Banner;
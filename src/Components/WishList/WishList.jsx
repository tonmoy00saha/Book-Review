import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../Utility/localstoragewishlist";
import ReadBook from "../ReadBook/ReadBook";


const WishList = () => {
    const wishlistBook = useLoaderData();
    const [wishlists, setWishLists] = useState([]);
    useEffect(()=>{
        const getwishlist = getWishlist();
        const wishlistdata = [];
        for( const id of getwishlist)
        {
            const data = wishlistBook.find(data=> data.bookId == id);
            wishlistdata.push(data);
        }
        setWishLists(wishlistdata);
    },[wishlistBook]);
    return (

        <div>
            {
                wishlists.map(read => <ReadBook key={read.bookId} read={read}></ReadBook>)
            }
        </div>
    );
};

export default WishList;
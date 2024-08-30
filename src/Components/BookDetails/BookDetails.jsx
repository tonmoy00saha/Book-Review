import { useLoaderData, useParams } from "react-router-dom";
import BookdetailsTag from "../BookdetailsTag/BookdetailsTag";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getRead, saveReadBook } from "../Utility/localstorageRead";
import { getWishlist, saveWishList } from "../Utility/localstoragewishlist";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId}= useParams();
    const book = books.find(book=> book.bookId === bookId);
    const {image, bookName, author, review, category, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    const handleReadBook = ()=>{
        const getread = getRead();
        const getwishlist = getWishlist();

        const exist = getread.find(id=> id==bookId);
        const existwishlist = getwishlist.find(id=> id==bookId);
        if(existwishlist)
        {
            localStorage.removeItem('wishlist');
            for(const id of getwishlist)
            {
                if(id != existwishlist)
                {
                    saveWishList(parseInt(id));
                }
            }
        }
        if(exist)
        {
            toast.warning("Book already added to ReadList");
        }
        else
       {
        saveReadBook(parseInt(bookId));
        toast('Book added to ReadList successfully!!!');
       }
        
    };
    const handleWishlist= ()=>{
        const getwishlist = getWishlist();
        const exist = getwishlist.find(id=>id==bookId);
        if(exist)
        {
            toast.warning('Book already added to the wishlist');
        }
        else
        {
            saveWishList(parseInt(bookId));
            toast('Book added to the WishList Successfully');
        }
    }
    return (
        <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1313130D] p-16 rounded-3xl">
                <img src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="playfair text-4xl font-bold">{bookName}</h2>
                <h4 className="text-xl font-medium worksans text-[#131313CC] ">By : {author}</h4>
                <hr />
                <p className="text-xl font-medium worksans text-[#131313CC] ">{category}</p>
                <hr />
                <p className="worksans text-[#131313B3] "><span className="font-bold text-black">Review: </span>{review}</p>
                <div className="flex gap-4 items-center">
                    <p className="font-bold worksans">Tag</p>
                    <div className="flex gap-3">
                        {
                            tags.map((tag,id)=><BookdetailsTag key={id} tag={tag}></BookdetailsTag>)
                        }
                    </div>
                </div>
                <hr />
                <table className="table worksans">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Number of Pages:</td>
                            <td className="font-semibold text-[#131313]">{totalPages}</td>
                            
                        </tr>
                        <tr>
                            <td>Publisher: </td>
                            <td  className="font-semibold text-[#131313]">{publisher}</td>
                            
                        </tr>
                        <tr>
                            <td>Year of Publishing: </td>
                            <td  className="font-semibold text-[#131313]">{yearOfPublishing}</td>
                            
                        </tr>
                        <tr>
                            <td>Rating: </td>
                            <td  className="font-semibold text-[#131313]">{rating}</td>
                            
                        </tr>
                    </tbody>
                </table>
                <div className="worksans text-lg flex gap-4">
                    <button className="btn btn-outline font-semibold" onClick={handleReadBook}>Read</button>
                    <button className="btn bg-[#50B1C9] text-white" onClick={handleWishlist}>Wishlist</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default BookDetails;
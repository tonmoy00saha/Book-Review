import BookdetailsTag from "../BookdetailsTag/BookdetailsTag";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";
const ReadBook = ({ read }) => {
    const { bookId, image, bookName, author, review, category, tags, totalPages, publisher, yearOfPublishing, rating } = read;

    return (

        <div>

            <div className="card bg-base-100 shadow-xl p-6 md:flex md:flex-row gap-6">
                <figure className="w-56 bg-[#1313130D] px-12 py-7 rounded-xl">
                    <img className="rounded-xl"
                        src={image}
                        alt="Book_Image" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title playfair text-2xl font-bold">{bookName}</h2>
                    <p className='worksans text-[#131313CC] font-medium'>By : {author}</p>
                    <div className="md:flex gap-4 items-center worksans">
                       <div className="flex gap-4 items-center">
                       <div>
                            <p className=" font-bold">Tag</p>
                        </div>
                        <div className="flex gap-3">
                            {
                                tags.map(tag => <BookdetailsTag key={bookId} tag={tag}></BookdetailsTag>)
                            }
                        </div>
                       </div>
                        <div className="flex gap-2 items-center">
                            <CiLocationOn></CiLocationOn>
                            <p className="text-[#131313CC]">Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="md:flex gap-4 text-[#13131399]">
                        <div className="flex gap-2 items-center">
                            <IoPeopleOutline></IoPeopleOutline>
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <TbPageBreak></TbPageBreak>
                            <p>Page {totalPages}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-3">
                        <div>
                            <p className="text-[#328EFF] rounded-3xl py-2 px-4 bg-[#328EFF26] font-medium ">Catergory: {category}</p>
                        </div>
                        <div>
                            <p className="text-[#FFAC33] rounded-3xl py-2 px-4 bg-[#FFAC3326] font-medium ">Rating: {rating}</p>
                        </div>
                        <Link to={`/book/${bookId}`} className="text-primary rounded-3xl py-2 px-4 bg-[#23BE0A0D] font-medium ">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;
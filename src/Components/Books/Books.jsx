import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setbooks]= useState([]);
    useEffect(()=>{
        fetch('BooksInfo.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[books]);
    return (
        <div className="my-12 space-y-9">
            <h2 className="text-center playfair font-semibold text-4xl">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
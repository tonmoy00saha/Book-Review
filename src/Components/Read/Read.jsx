import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getRead } from "../Utility/localstorageRead";
import ReadBook from "../ReadBook/ReadBook";

const Read = () => {
    const readBook = useLoaderData();
    const [reads, setReads]= useState([]);
    useEffect(()=>{
        const getReadBook = getRead();
        // console.log(getReadBook.length);
        if(readBook.length)
        {
            const readBookData= [];
            for(const id of getReadBook)
            {
                const data = readBook.find(data => data.bookId == id);
                if(data)
                readBookData.push(data);
            }
            setReads(readBookData);

        }
    },[readBook]);
    return (
        <div>
            {
                reads.map(read=> <ReadBook key={read.bookId} read={read}></ReadBook>)
            } 
        </div>
    );
};

export default Read;
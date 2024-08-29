

const getRead = () =>{
    const readBook = localStorage.getItem('read');
    if(readBook)
        return JSON.parse(readBook);
    return [];
}
const saveReadBook =  (id) =>{
    const read = getRead();
  
        read.push(id);
        localStorage.setItem('read', JSON.stringify(read));
    
}
export {getRead, saveReadBook};
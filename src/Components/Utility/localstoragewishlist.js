const getWishlist = () => {
    const getwishlist = localStorage.getItem('wishlist');
    if (getwishlist)
        return JSON.parse(getwishlist);
    return [];
}
const saveWishList = (id) => {
    const wishlist = getWishlist();
    wishlist.push(id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

}
export {getWishlist, saveWishList}
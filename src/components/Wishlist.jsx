import BookCard from '../components/BookCard';
import { useState,useEffect } from 'react';
import './Wishlist.css'
function Wishlist() {
    const [wishlist, setWishlist] = useState([]); 
        
    
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    },[]);
    const toggleWishlist = (book) => {
        const updatedWishlist = wishlist.find(item => item.id === book.id)
            ? wishlist.filter(item => item.id !== book.id)
            : [...wishlist, book];

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    // Filter the wishlisted books
    return (
        <div className="wishlist">
            {wishlist.length === 0 ? (<p>Empty</p>) : (
                wishlist.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                        toggleWishlist={toggleWishlist}
                        isWishlisted={true}
                    />
                ))
            )}
        </div>
    );
}

export default Wishlist;

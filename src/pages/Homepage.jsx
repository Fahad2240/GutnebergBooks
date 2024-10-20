import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/api';
import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';

function HomePage() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [wishlist, setWishlist] = useState([]); 
    const [perPageBook]=useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchBooks(searchTerm);
                setBooks(result.results);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchData();
    }, [searchTerm]);

    const toggleWishlist = (book) => {
        const updatedWishlist = wishlist.find(item => item.id === book.id)
            ? wishlist.filter(item => item.id !== book.id)
            : [...wishlist, book];

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

     // Calculate the index of the first and last book on the current page
     const indexOfLastBook = currentPage * perPageBook;
     const indexOfFirstBook = indexOfLastBook - perPageBook;
     const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
 
     // Function to handle page change
     const handlePageChange = (pageNumber) => {
         setCurrentPage(pageNumber);
     };
    return (
        <div>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="book-list">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                        toggleWishlist={toggleWishlist}
                        isWishlisted={wishlist.some(item => item.id === book.id)}
                    />
                ))}
            </div>
            <Pagination
                perPageBook={perPageBook}
                totalBooks={books.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default HomePage;
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import Pagination from './Pagination';
import './BookList.css'; // Optional for styling the book list

function BookList({ books, toggleWishlist, wishlist }) {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;
    const totalPages = Math.ceil(books.length / booksPerPage);

    // Calculate the books to display based on the current page
    const currentBooks = books.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="book-list">
            {currentBooks.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    toggleWishlist={toggleWishlist}
                    isWishlisted={wishlist.includes(book.id)}
                />
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default BookList;

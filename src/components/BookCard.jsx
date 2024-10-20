import './BookCard.css'
function BookCard({ book, toggleWishlist, isWishlisted }) {
    return (
        <div className="book-card">
            <img src={book.formats["image/jpeg"]} alt={book.title} className="book-cover" />
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.authors.map(author => author.name).join(", ")}</p>
                <button
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(book)}
                >
                    {isWishlisted ? "❤️" : "♡"}
                </button>
            </div>
        </div>
    );
}



export default BookCard;

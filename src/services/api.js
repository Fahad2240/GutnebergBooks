const BASE_URL = "https://gutendex.com/books";

export const fetchBooks = async (query = "") => {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }
    return response.json();
};

import { useState, useEffect } from "react";
import PageHeading from "./PageHeading";
import BookListings from "./BookListings.jsx";
import apiClient from "../api/apiClient.js";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/books");
      setBooks(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Failed to fetch books, Try Again"
      );
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">
          Loading Books...
        </span>
      </div>
    );
  }

  if(error){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-red-500">
          Error: {error}
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 dark:bg-darkbg">
      <PageHeading title="Welcome to AlephBooks Store">
        <p className="page-heading-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          voluptate reprehenderit ab expedita, magni, repellendus quasi commodi,
          nihil quibusdam consequatur et? Libero exercitationem velit quo.
        </p>
      </PageHeading>
      <BookListings books={books} />
    </div>
  );
}

export default Home;

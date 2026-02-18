import PageHeading from "./PageHeading";
import BookListings from "./BookListings.jsx";
import apiClient from "../api/apiClient.js";
import { useLoaderData } from "react-router-dom";

function Home() {
  const books = useLoaderData();
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

export async function booksLoader(){
  try {
    const response = await apiClient.get("/books"); 
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch books. Please try again.",
      { status: error.status || 500 },
    );
  }
}

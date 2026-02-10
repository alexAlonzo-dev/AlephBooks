import { useState, useEffect } from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient.js";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Failed to fetch products, Try Again"
      );
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">
          Loading Products...
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
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Welcome to AlephBooks Store">
        <p className="page-heading-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          voluptate reprehenderit ab expedita, magni, repellendus quasi commodi,
          nihil quibusdam consequatur et? Libero exercitationem velit quo.
        </p>
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export default Home;

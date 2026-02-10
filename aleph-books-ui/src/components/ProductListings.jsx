import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

function ProductListings({ products }) {
  const [searchText, setSearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");

  function handleSearchChange(e) {
    setSearchText(e);
  }

  function handleSortChange(sortType) {
    setSelectedSort(sortType);
  }

  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let result = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    switch (selectedSort) {
      case "Price Low to High":
        return [...result].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price),
        );
      case "Price High to Low":
        return [...result].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price),
        );
      case "Popularity":
      default:
        return [...result].sort(
          (a, b) => parseInt(b.popularity) - parseInt(a.popularity),
        );
    }
  }, [products, searchText, selectedSort]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search Products"
          value={searchText}
          handleSearch={(val) => handleSearchChange(val)}
        />
        <Dropdown
          label="Sort By"
          options={sortList}
          value={selectedSort}
          handleSort={(val) => handleSortChange(val)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary dark:text-lighter">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductListings;

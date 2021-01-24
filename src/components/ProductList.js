// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState(""); //empty block

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;

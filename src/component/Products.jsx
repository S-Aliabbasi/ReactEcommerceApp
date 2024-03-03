import React from "react";
import Product from "../component/Product";
import styled from "styled-components";
import { popularProducts } from "../component/data";

const Container = styled.div`
  padding: 20px;
  display: flex;

  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

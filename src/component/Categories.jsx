import React from "react";
import styled from "styled-components";
import { categories } from "../component/data";
import CategoryItem from "../component/CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Categories = () => {
  return (
    <Container>
      hello
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;

import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import { Announcement } from "../component/Announcement";
import Products from "../component/Products";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
`;
const Select = styled.select`
  margin: 20px;
  padding: 10px;
`;
const Option = styled.option`
  /* margin: 20px; */
`;

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(dec)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img``;
const Title = styled.h1``;
const Info = styled.div``;
const Button = styled.button``;

const CategoryItem = (item) => {
  return (
    <Container>
      <Img src={item.img}></Img>
      <Title title={item.title}></Title>
      <Info info={item.info}></Info>
      <Button></Button>
    </Container>
  );
};

export default CategoryItem;

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Inspiration", cursive;
  font-size: xxx-large;
`;
const Desc = styled.p``;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div``;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lena</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          similique optio enim eos commodi mollitia distinctio quod veniam ad
          tempora asperiores totam nulla provident dolor quo, suscipit in
          architecto aliquid!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;

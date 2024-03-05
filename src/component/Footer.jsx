import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  display: flex;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Inspiration", cursive;
  font-size: xxx-large;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Payment = styled.img`
  width: 50%;
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
          <SocialIcon color="#3b5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#E4405f">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessorise</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginright: "10px" }} />
          Address
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginright: "10px" }} />
          Phone
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginright: "10px" }} />
          Email
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;

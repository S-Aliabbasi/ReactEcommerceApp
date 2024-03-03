import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const Container = styled.div`
  height: 120px;
  padding: 10px 10px;
  background-color: #2f4f4f;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
//###########################
const Logo = styled.div`
  flex: 45%;
`;

const Logostyle = styled.span`
  font-weight: bold;
  font-family: "Inspiration", cursive;
  font-size: xxx-large;
`;

//###########################
const NavbarFeatures = styled.div`
  flex: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 10px;
  width: 30%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: #d9d9d9;
  width: 85%;
`;
const SearchContainer = styled.div`
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 45%;
  background-color: #d9d9d9;
`;
const ClickableIcon = styled.div`
  cursor: pointer;
`;
//###########################

const MenuContanir = styled.div`
  flex: 100%;
  display: flex;
  padding-top: 34px;
`;
const Item = styled.div`
  padding-right: 65px;
  font-weight: normal;
  font-family: "Poppins";
  font-size: medium;
  justify-items: flex-end;
`;

//###########################
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Logostyle>Lena</Logostyle>
        </Logo>

        <NavbarFeatures>
          <SearchContainer>
            <ClickableIcon>
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </ClickableIcon>
            <Input />
          </SearchContainer>
          <ClickableIcon>
            <ShoppingCartOutlinedIcon />
          </ClickableIcon>
          <ClickableIcon>
            <PermIdentityOutlinedIcon />
          </ClickableIcon>
        </NavbarFeatures>
        <MenuContanir>
          <Item>MAN</Item>
          <Item>WOMEN</Item>
          <Item>KIDS</Item>
        </MenuContanir>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

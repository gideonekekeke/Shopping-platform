import React, { useContext, useState } from "react";
import styled from "styled-components";
import pic from "../img/2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "antd";
import PolymerIcon from "@material-ui/icons/Polymer";
import { app } from "../Base";
import ModalPage from "./MainBody/ModalPage";
import { ProductProvider } from "./MainBody/ProductProvider/ProductProvider";

const HeaderView = () => {
  const { current } = useContext(ProductProvider);
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <Container>
      <LogoHolder>
        <PolymerIcon />
        <LogoText>ShoppingStore</LogoText>
      </LogoHolder>

      <CenterHolder>
        <PolymerIcon />
      </CenterHolder>
      <SecondHolder>
        <ShoppingCartIcon />
        <MessageIcon />
        {current ? (
          <>
            <button
              onClick={Toggle}
              style={{
                height: "50px",
                width: "120px",
                fontSize: "15px",
                borderRadius: "10px",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={Toggle}
            style={{
              height: "50px",
              width: "120px",
              fontSize: "15px",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
        )}
        <UserName>{current?.displayName}</UserName>
      </SecondHolder>
      <ModalPage show={show} r={Toggle} />
    </Container>
  );
};

export default HeaderView;

const UserName = styled.div``;

const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;
const LogoText = styled.div`
  margin-left: 10px;
`;

const CenterHolder = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: white;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-left: 40px;

  /* animation: fade-in 0.5s ease-in-out forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    } */

    &:hover {
      border: 10px solid rgba(21, 20, 20, 0.713);
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid gray;
  color: silver;
  height: 70px;
`;

const Logo = styled.img`
  height: 100px;
`;

const SecondHolder = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`;

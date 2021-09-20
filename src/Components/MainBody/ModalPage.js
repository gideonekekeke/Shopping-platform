import { CancelOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import PolymerIcon from "@material-ui/icons/Polymer";
import firebase from "firebase";
import { app } from "../../Base";

const ModalPage = ({ show, r }) => {
  const signInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (provider) {
      await app.auth().signInWithPopup(provider);
    }
    console.log(provider);
  };

  return (
    <>
      {show ? (
        <Container>
          <Modal>
            <CancelOutlined
              style={{ margin: "10px" }}
              onClick={() => {
                r();
              }}
            />
            <ComponentHolder>
              <LogoHolder>
                <PolymerIcon />
                <LogoText>ShoppingStore</LogoText>
              </LogoHolder>
              <Desc>
                Unlock useful features by signing in. A bunch of cool stuff like
                content filters and bookmarks are waiting just for you.
              </Desc>
              <button
                onClick={signInGoogle}
                style={{ width: "200px", height: "40px" }}
              >
                Sign in with Google
              </button>
              <FootDiv>
                By signing up I accept the Terms of Service and the Privacy
                Policy.
              </FootDiv>
            </ComponentHolder>
          </Modal>
        </Container>
      ) : null}
    </>
  );
};

export default ModalPage;

const FootDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: gray;
  margin-top: 20px;
`;

const ComponentHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Desc = styled.div`
  text-align: center;
  /* width: 370px; */
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoText = styled.div`
  margin-left: 10px;
`;

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: red; */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(1px);
`;

const Modal = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  height: 300px;
  width: 400px;
  background-color: black;
  z-index: 10;
  flex-direction: column;
  border-radius: 10px;
`;

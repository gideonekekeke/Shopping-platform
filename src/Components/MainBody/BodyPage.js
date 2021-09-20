import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import pic from "../../img/4.jpg";
import pic2 from "../../img/5.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { app } from "../../Base";
import { Link } from "react-router-dom";

const BodyPage = () => {
  const [data, setData] = useState([]);

  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [ChildrenData, setChildrenData] = useState([]);

  const [clickMen, setClickMen] = useState(false);
  const [clickWomen, setClickWomen] = useState(false);
  const [clickChildren, setClickChildren] = useState(false);
  const [generalData, setGeneralData] = useState(false);

  const [liking, setLiking] = useState(1);

  const handlePopular = () => {
    setClickWomen(false);
    setClickChildren(false);
    setClickMen(false);
    setGeneralData(true);
  };

  const handleMen = () => {
    setClickWomen(false);
    setClickChildren(false);
    setClickMen(true);
  };
  const handlewomen = () => {
    setClickWomen(true);
    setClickChildren(false);
    setClickMen(false);
  };
  const handleChildren = () => {
    setClickWomen(false);
    setClickChildren(true);
    setClickMen(false);
  };

  // to get all document
  const fetchData = async () => {
    await app
      .firestore()
      .collection("Store")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
      });
  };

  // to get men document
  const fetchMenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("men")
      .endAt("men")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setMenData(item);
      });
  };

  // to get women data
  const fetchWomenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("women")
      .endAt("women")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setWomenData(item);
      });
  };

  //to get children data
  const fetchChildrenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("children")
      .endAt("children")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setChildrenData(item);
      });
  };

  useEffect(() => {
    fetchData();
    fetchMenData();
    fetchWomenData();
    fetchChildrenData();
    console.log("this is the data", data);
    console.log("this is men data", menData);
  }, []);

  return (
    <Container>
      <Description>
        Want a superweapon to ignite your customer’s interest in a product? It’s
        right under your nose: Take your product’s unique features and turn them
        into benefits.
      </Description>
      <BodyHead>
        <MainHolder>
          <SearchIcon />
          <PopularButon onClick={handlePopular}>Popular</PopularButon>
          <MenButon onClick={handleMen}>Men</MenButon>
          <WomenButon onClick={handlewomen}>Women</WomenButon>
          <ChildButton onClick={handleChildren}>Children</ChildButton>
        </MainHolder>
        <AddProduct to="/post">
          Upload Products <AddIcon style={{ marginLeft: "10px" }} />
        </AddProduct>
      </BodyHead>
      <CardHolder>
        {clickMen ? (
          <>
            {menData.map(({ id, avatar }) => (
              <Card key={id}>
                <CompanyLogo src={pic} />
                <Title>
                  The perfect size to grill up a couple of burgers for everyone
                  in the family
                </Title>
                <Date>10 minute ago</Date>
                <PostImg src={avatar} />
                <IconsHolder>
                  <ShoppingCartIcon />
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/coment/${id}`}
                  >
                    {" "}
                    <MessageIcon />
                  </Link>
                  <FavoriteBorderIcon />
                </IconsHolder>
              </Card>
            ))}
          </>
        ) : (
          <>
            {clickWomen ? (
              <>
                {womenData.map(({ id, avatar }) => (
                  <Card key={id}>
                    <CompanyLogo src={pic} />
                    <Title>
                      The perfect size to grill up a couple of burgers for
                      everyone in the family
                    </Title>
                    <Date>10 minute ago</Date>
                    <PostImg src={avatar} />
                    <IconsHolder>
                      <ShoppingCartIcon />
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/coment/${id}`}
                      >
                        {" "}
                        <MessageIcon />
                      </Link>
                      <FavoriteBorderIcon />
                    </IconsHolder>
                  </Card>
                ))}
              </>
            ) : (
              <>
                {clickChildren ? (
                  <>
                    {ChildrenData.map(({ id, avatar }) => (
                      <Card key={id}>
                        <CompanyLogo src={pic} />
                        <Title>
                          The perfect size to grill up a couple of burgers for
                          everyone in the family
                        </Title>
                        <Date>10 minute ago</Date>
                        <PostImg src={avatar} />
                        <IconsHolder>
                          <ShoppingCartIcon />
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/coment/${id}`}
                          >
                            {" "}
                            <MessageIcon />
                          </Link>
                          <FavoriteBorderIcon />
                        </IconsHolder>
                      </Card>
                    ))}
                  </>
                ) : (
                  <>
                    {generalData ? (
                      <>
                        {data.map(({ id, avatar }) => (
                          <Card key={id}>
                            <CompanyLogo src={pic} />
                            <Title>
                              The perfect size to grill up a couple of burgers
                              for everyone in the family
                            </Title>
                            <Date>10 minute ago</Date>
                            <PostImg src={avatar} />
                            <IconsHolder>
                              <ShoppingCartIcon />
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/coment/${id}`}
                              >
                                {" "}
                                <MessageIcon />
                              </Link>
                              <FavoriteBorderIcon />
                            </IconsHolder>
                          </Card>
                        ))}
                      </>
                    ) : (
                      <>
                        {data.map(({ id, avatar, like }) => (
                          <Card key={id}>
                            <CompanyLogo src={pic} />
                            <Title>
                              The perfect size to grill up a couple of burgers
                              for everyone in the family
                            </Title>
                            <Date>10 minute ago</Date>
                            <PostImg src={avatar} />
                            <IconsHolder>
                              <ShoppingCartIcon />
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/coment/${id}`}
                              >
                                {" "}
                                <MessageIcon />
                              </Link>
                              <FavoriteBorderIcon />
                            </IconsHolder>
                          </Card>
                        ))}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </CardHolder>
    </Container>
  );
};

export default BodyPage;

const Counting = styled.div``;

const CompanyLogo = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 10px;
  border: 1px solid silver;
`;
const Title = styled.div`
  color: white;
  width: 94%;
  display: flex;

  margin: 10px;
  font-weight: bold;
`;
const Date = styled.div`
  margin: 10px;
  margin-top: 20px;
  color: gray;
`;
const PostImg = styled.img`
  width: 95%;
  height: 120px;
  margin: 5px;
  border-radius: 10px;
  object-fit: cover;
`;

const IconsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 5px;
  padding-bottom: 5px;
  color: white;
`;

const CardHolder = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  /* height: 340px; */
  width: 280px;
  border: 1px solid silver;
  border-radius: 10px;
  background-color: #292a2c;
  margin: 10px;

  box-shadow: 0px 5px 7px 5px rgba(0, 0, 0, 0.35);
`;

const PopularButon = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
const MenButon = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
const WomenButon = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
const ChildButton = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
const MainHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
`;
const AddProduct = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;

  cursor: pointer;

  &:hover {
    color: gray;
    transition: scale(3s);
  }
`;

const Description = styled.div`
  height: 60px;
  width: 380px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  /* background-color: red; */

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const BodyHead = styled.div`
  /* padding-top: 50px; */
  margin-top: 30px;
  display: flex;
  /* background-color: white; */
  width: 95%;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  color: white;
`;

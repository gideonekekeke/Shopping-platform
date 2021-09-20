import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { app } from "../../Base";

const db = app.firestore().collection("Store");
const CommentUser = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const PostComment = async () => {
    const user = app.auth().currentUser;
    if (user) {
      await db.doc(id).collection("comment").doc().set({
        message,
        userId: user.uid,
        userName: user.displayName,
        userImage: user.photoURL,
      });
      setMessage("");
    }
  };

  const MapComments = async () => {
    await db
      .doc(id)
      .collection("comment")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push(doc.data());
        });
        setData(item);
        console.log(item);
      });
  };

  useEffect(() => {
    MapComments();
    console.log("this is the comments", data);
  }, []);

  return (
    <>
      <Container>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          style={{ height: "50px", width: "250px" }}
          placeholder="comment"
        />
        <button onClick={PostComment}>Send</button>
        {data.map(({ id, message, userName, userImage }) => (
          <>
            <ComUser> {message}</ComUser>
            <ComName>{userName}</ComName>
            <UserIm src={userImage} />
          </>
        ))}
      </Container>
    </>
  );
};

export default CommentUser;

const UserIm = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const ComName = styled.div``;

const ComUser = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  flex-direction: column;
`;

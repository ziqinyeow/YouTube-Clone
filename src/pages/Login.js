import React, { useEffect } from "react";

//dependencies
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//icons
import "remixicon/fonts/remixicon.css";

//redux
import { login } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <Container>
      <InnerContainer>
        <Card>
          <Logo>
            <i className="ri-youtube-fill"></i>
          </Logo>
          <Title>
            <h1>Welcome !</h1>
          </Title>
          <Description>
            This is a youtube clone using React, Redux, Firestore & Youtube API.
          </Description>
          <Button onClick={handleLogin}>Sign in with Google</Button>
        </Card>
      </InnerContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div``;

const Card = styled.div`
  width: 450px;
  height: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const Logo = styled.div`
  i {
    font-size: 150px;
    color: #ff0000;
  }
`;

const Title = styled.div`
  h1 {
    font-family: "ExtraBold";
  }
`;

const Description = styled.div`
  font-size: 18px;
  text-align: center;
  font-family: "Medium";
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: none;
  outline: none;
  color: white;
  background-color: #ff0000;
  padding: 15px 25px;
  font-family: "Bold";
  font-size: 15px;
`;

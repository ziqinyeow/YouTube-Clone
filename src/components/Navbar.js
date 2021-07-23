import React, { useEffect, useState } from "react";

//dependencies
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

//images
import youtube from "../images/youtube.svg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

function Navbar({ onToggle, expand }) {
  const history = useHistory();

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth?.user?.name);
  const photoURL = useSelector((state) => state.auth?.user?.photoURL);

  const [toggle, setToggle] = useState(!expand);
  const [profile, showProfile] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };

  useEffect(() => {
    onToggle(toggle);
  }, [toggle, onToggle]);

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Menu onClick={handleClick}>
            <Line1></Line1>
            <Line2></Line2>
            <Line3></Line3>
          </Menu>
          <Logo>
            <img src={youtube} alt="youtube_logo" />
          </Logo>
        </Header>
        <SearchBar onSubmit={handleSubmit}>
          <Search>
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit">
              <i className="ri-search-2-line"></i>
            </button>
          </Search>
        </SearchBar>
        <CTA>
          <Button>
            <i className="ri-video-add-line"></i>
          </Button>
          <Button>
            <i className="ri-grid-fill"></i>
          </Button>
          <Notification>
            <i className="ri-notification-3-line"></i>
            <span>3</span>
          </Notification>
          <ProfileContainer>
            <Profile
              onClick={() => {
                showProfile((prev) => !prev);
              }}
            >
              <img
                src={
                  photoURL
                    ? photoURL
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                }
                alt="profile_picture"
              />
            </Profile>
            <ProfileDropdown style={{ display: profile ? "" : "none" }}>
              <button
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log Out
              </button>
            </ProfileDropdown>
          </ProfileContainer>
        </CTA>
      </InnerContainer>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  padding: 10px;
  width: 100vw;
  height: 56px;
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const InnerContainer = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  height: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled.div`
  width: 15px;
  height: 2px;
  background-color: #1f2022;
`;
const Line1 = styled(Line)``;
const Line2 = styled(Line)``;
const Line3 = styled(Line)``;

const Logo = styled.div`
  height: 100%;
  cursor: pointer;
  img {
    width: 120px;
    height: 100%;
    /* object-fit: contain; */
  }
`;

const SearchBar = styled.form`
  /* height: 100%; */
  width: 40%;
  height: 100%;
`;

const Search = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 0 20px;

  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: "Bold";
    letter-spacing: 0.5px;

    ::placeholder {
      color: #a9acb4;
    }

    ::-ms-input-placeholder {
      color: #a9acb4;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;

    i {
      font-size: 18px;
    }
  }
`;

const CTA = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  i {
    font-size: 20px;
    color: #c2c2c2;
  }
`;

const Button = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #f9f9f9;
  }
`;

const Notification = styled.div`
  position: relative;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 8px;
    background-color: #ff0000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    background-color: #f9f9f9;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
`;

const Profile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 28px;
    width: 28px;
  }
`;

const ProfileDropdown = styled.div`
  cursor: default;
  position: absolute;
  top: -10%;
  right: 110%;
  z-index: 100;
  width: 300px;
  height: 300px;
  background-color: #f9f9f9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 10px;
  }
`;

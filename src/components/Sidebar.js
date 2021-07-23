import React from "react";
import { NavLink } from "react-router-dom";

//dependencies
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

function Sidebar() {
  return (
    <Container>
      <Main>
        <Link to="/" exact activeClassName="active">
          <Home>
            <i className="ri-home-4-line"></i>
            <span>Home</span>
          </Home>
        </Link>
        <Link to="/trending" activeClassName="active">
          <Trending>
            <i className="ri-fire-line"></i>
            <span>Trending</span>
          </Trending>
        </Link>
        <Link to="/subscriptions" activeClassName="active">
          <Subscription>
            <i className="ri-archive-line"></i>
            <span>Subscriptions</span>
          </Subscription>
        </Link>
      </Main>
      <Others>
        <Link to="library" activeClassName="active">
          <Library>
            <i className="ri-folder-line"></i>
            <span>Library</span>
          </Library>
        </Link>
        <Link to="history" activeClassName="active">
          <History>
            <i className="ri-history-line"></i>
            <span>History</span>
          </History>
        </Link>
        <Link to="watchlater" activeClassName="active">
          <WatchLater>
            <i className="ri-map-pin-time-line"></i>
            <span>Watch Later</span>
          </WatchLater>
        </Link>
        <Link to="favourite" activeClassName="active">
          <Favourites>
            <i className="ri-star-line"></i>
            <span>Favourite</span>
          </Favourites>
        </Link>
        <Link to="likedvideos" activeClassName="active">
          <LikedVideos>
            <i className="ri-heart-2-line"></i>
            <span>Liked Videos</span>
          </LikedVideos>
        </Link>
        <Link to="music" activeClassName="active">
          <Music>
            <i className="ri-music-2-line"></i>
            <span>Music</span>
          </Music>
        </Link>
        <Link to="gaming" activeClassName="active">
          <Gaming>
            <i className="ri-gamepad-line"></i>
            <span>Gaming</span>
          </Gaming>
        </Link>
      </Others>
      <Subscriptions>
        <Title>Subscriptions</Title>
        <Link to="1" activeClassName="sub-active">
          <Channel>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt="channel1"
            />
            <span>Gussie Singleton</span>
          </Channel>
        </Link>
        <Link to="2" activeClassName="sub-active">
          <Channel>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="channel2"
            />
            <span>Leah Berry</span>
          </Channel>
        </Link>
        <Link to="3" activeClassName="sub-active">
          <Channel>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="channel3"
            />
            <span>Eunice Cortez</span>
          </Channel>
        </Link>
      </Subscriptions>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 240px;
  height: calc(100vh - 56px);
  position: fixed;
  left: 0;
  z-index: 98;
  overflow: hidden;
  background-color: white;

  :hover {
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f7f6f3;
    border-left: 1px solid #e6ecf8;
  }

  .active {
    color: #ff0000;
    background-color: #f9f9f9;
  }

  .sub-active {
    color: black;
    background-color: #f9f9f9;
  }
`;

const Tab = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 12px 0;

  i {
    font-size: 18px;
    margin-right: 20px;
  }
`;

const Main = styled.div`
  margin: 0 0 30px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #c2c2c2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #f9f9f9;
  }
`;

const Home = styled(Tab)``;

const Trending = styled(Tab)``;

const Subscription = styled(Tab)``;

const Others = styled.div`
  margin-bottom: 30px;
`;

const Library = styled(Tab)``;

const History = styled(Tab)``;

const WatchLater = styled(Tab)``;

const Favourites = styled(Tab)``;

const LikedVideos = styled(Tab)``;

const Music = styled(Tab)``;

const Gaming = styled(Tab)``;

const Subscriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.div`
  width: 80%;
  font-family: "Bold";
  padding: 20px 0;
`;

const Channel = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  padding: 12px 0;

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    margin-right: 15px;
  }
`;

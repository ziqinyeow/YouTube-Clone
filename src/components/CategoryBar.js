import React, { useState } from "react";

//dependencies
import styled from "styled-components";

//data
import keywords from "../data/keywords";

//redux
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/video.action";

function CategoryBar() {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (keyword) => {
    setActive(keyword);
    if (keyword === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(keyword));
    }
  };

  return (
    <>
      <Container>
        {keywords.map((keyword, index) => (
          <Category
            className={active === keyword ? "active" : ""}
            key={index}
            onClick={() => handleClick(keyword)}
          >
            {keyword}
          </Category>
        ))}
      </Container>
      <Overlay></Overlay>
    </>
  );
}

export default CategoryBar;

const Container = styled.div`
  padding: 0 10px;
  height: 56px;
  width: 100vw;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  position: fixed;
  top: 56px;
  z-index: 97;
  background-color: white;
  ::-webkit-scrollbar {
    height: 0px;
  }

  transition: all 0.5s ease;

  .active {
    background-color: #f9f9f9;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

const Category = styled.div`
  cursor: pointer;
  margin: 0 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  /* transition: all 0.5s ease; */

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

const Overlay = styled.div`
  height: 56px;
`;

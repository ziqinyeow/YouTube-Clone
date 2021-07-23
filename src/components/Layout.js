import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

//dependencies
import styled from "styled-components";

//redux
// import { useSelector } from "react-redux";

//components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";

const Layout = ({ children, expand }) => {
  const [toggle, setToggle] = useState(!expand);

  const handleToggle = (toggle) => {
    setToggle(toggle);
  };

  return (
    <Container>
      <Navbar onToggle={handleToggle} expand={expand} />
      <Overlay w="100vw" h="56px" />
      <InnerContainer toggle={!toggle}>
        {!toggle && (
          <>
            <SideOverlay></SideOverlay>
            <Sidebar />
          </>
        )}
        <Child>{children}</Child>
      </InnerContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.toggle ? "240px calc(100vw - 240px)" : ""};

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const SideOverlay = styled.div`
  width: 240px;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Child = styled.div`
  /* width: 100%; */
`;

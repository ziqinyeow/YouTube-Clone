import React from "react";

//dependencies
import styled from "styled-components";

function Overlay({ w, h }) {
  return <Container w={w} h={h}></Container>;
}

export default Overlay;

const Container = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

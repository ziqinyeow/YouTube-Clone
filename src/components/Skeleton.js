import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeletons = () => {
  return (
    <SkeletonTheme highlightColor="#F7F6F3">
      <Skeleton height={180} />
      <Skeleton height={44} style={{ marginTop: "10px" }} />
      <Skeleton height={30} style={{ marginTop: "10px" }} />
    </SkeletonTheme>
  );
};

export default Skeletons;

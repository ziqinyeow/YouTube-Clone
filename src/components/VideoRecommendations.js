import React, { useEffect, useState } from "react";

//dependencies
import numeral from "numeral";
import styled from "styled-components";

//redux
import { useSelector } from "react-redux";
import moment from "moment";
import request from "../api";
import VideoSide from "./VideoSide";
import Skeleton from "./Skeleton";

const VideoRecommendations = () => {
  const { videos, loading } = useSelector((state) => state.relatedVideo);

  return (
    <Container>
      {!loading
        ? videos
            ?.filter((video) => video.snippet)
            .map((videos, i) => <VideoSide videos={videos} key={i} />)
        : [...Array(20)].map((e, i) => <Skeleton key={i} width="100%" />)}
    </Container>
  );
};

export default VideoRecommendations;

const Container = styled.div`
  /* padding: 0 20px; */
`;

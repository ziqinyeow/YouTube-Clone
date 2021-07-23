import React, { useEffect } from "react";

//dependencies
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";

//components
import Video from "../components/Video";
import CategoryBar from "../components/CategoryBar";
import Skeleton from "../components/Skeleton";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/video.action";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideo
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <Container>
      <CategoryBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <LoaderDiv>
            <Loader color="black" size={50} />
          </LoaderDiv>
        }
      >
        <InnerContainer>
          {!loading
            ? videos.map((video, index) => <Video key={index} video={video} />)
            : [...Array(20)].map((e, i) => (
                <Skeleton key={i} height={274} width="100%" />
              ))}
        </InnerContainer>
      </InfiniteScroll>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const InnerContainer = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LoaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Loader = styled(ClipLoader)``;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//dependencies
import styled from "styled-components";

//components
import VideoComments from "../components/VideoComments";
import VideoMetaTag from "../components/VideoMetaTag";
import VideoRecommendations from "../components/VideoRecommendations";
import {
  getRelatedVideosById,
  getVideosById,
} from "../redux/actions/video.action";

//redux
import { useDispatch, useSelector } from "react-redux";

const Watch = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { video, loading } = useSelector((state) => state.selectedVideo);

  useEffect(() => {
    dispatch(getVideosById(id));
    dispatch(getRelatedVideosById(id));
  }, [dispatch, id]);

  return (
    <Container>
      <VideoContent>
        <Video>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </Video>
        {!loading ? <VideoMetaTag video={video} videoId={id} /> : <h2>we</h2>}
        <VideoComments video={video} videoId={id} />
      </VideoContent>
      <VideoRecommendations />
    </Container>
  );
};

export default Watch;

const Container = styled.div`
  padding: 20px 80px 0 90px;
  display: grid;
  grid-template-columns: 2.6fr 1.4fr;

  @media screen and (max-width: 1050px) {
    padding: 20px 80px 0 50px;
  }

  @media screen and (max-width: 1000px) {
    padding: 20px 30px 0;
  }

  @media screen and (max-width: 990px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }
`;

const VideoContent = styled.div`
  /* media */
  margin-right: 50px;

  @media screen and (max-width: 990px) {
    margin-right: 0;
  }
`;

const Video = styled.div`
  height: 60vh;

  iframe {
    width: 100%;
    border-radius: 8px;
  }
`;

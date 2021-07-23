import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import request from "../api";

const VideoSide = ({
  videos: {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      description,
      publishedAt,
      thumbnails,
    },
  },
}) => {
  const history = useHistory();
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = videoId?.videoId || videoId;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("./videos", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [_videoId]);

  const handleClick = () => {
    history.push(`/watch/${videoId}`);
  };

  return (
    <Video onClick={handleClick}>
      <Img>
        {/* <img src={thumbnails.high.url} alt="" /> */}
        <LazyLoadImage src={thumbnails.high.url} effect="blur" />
        <VideoLength>
          <span>{_duration}</span>
        </VideoLength>
      </Img>
      <VideoContent>
        <Title>{title}</Title>
        <Description>
          <ChannelName>{channelTitle}</ChannelName>
          <Views>
            <div>{numeral(views).format("0.a").toUpperCase()} views</div>
            <div>{moment(publishedAt).fromNow()}</div>
          </Views>
        </Description>
      </VideoContent>
    </Video>
  );
};

export default VideoSide;

const Video = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  display: flex;
  border-radius: 8px;

  @media screen and (max-width: 1283px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  position: relative;
  img {
    width: 200px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const VideoLength = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 3px 10px;
  background-color: #aeadae;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Light";
    font-size: 13px;
    color: white;
  }
`;

const VideoContent = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  /* padding: 15px 0; */
  font-size: 19px;
  font-family: "Bold";
`;

const Description = styled.div`
  font-family: "Regular";
  font-size: 14px;
`;

const ChannelName = styled.div`
  font-size: 15px;
`;

const Views = styled.div`
  /* margin-top: ; */
  color: #c2c2c2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

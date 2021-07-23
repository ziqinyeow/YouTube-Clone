import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import request from "../api";

const SearchedVideo = ({
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
          </Views>
          <Published>{moment(publishedAt).fromNow()}</Published>
        </Description>
      </VideoContent>
    </Video>
  );
};

export default SearchedVideo;

const Video = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  border-radius: 8px;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
  position: relative;
  img {
    width: 320px;
    height: 180px;
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
  width: 100%;
`;

const Title = styled.div`
  padding: 15px 0;
  font-size: 22px;
  font-family: "Bold";
`;

const Description = styled.div`
  font-family: "Regular";
  font-size: 14px;
`;

const ChannelName = styled.div`
  font-size: 19px;
  padding-bottom: 10px;
`;

const Views = styled.div`
  font-size: 16px;

  color: #c2c2c2;
`;

const Published = styled.div`
  font-size: 16px;
  color: #c2c2c2;
`;

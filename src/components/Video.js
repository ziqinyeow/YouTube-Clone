import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//dependencies
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//data
import request from "../api";

//redux
// import { useDispatch } from "react-redux";
// import { getPopularVideos } from "../redux/actions/video.action";

function Video({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const history = useHistory();
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

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

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("./channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <Card onClick={handleVideoClick}>
      <Img>
        <LazyLoadImage src={medium.url} effect="blur" />
        <VideoLength>
          <span>{_duration}</span>
        </VideoLength>
      </Img>
      <Description>
        <h3>{title}</h3>
        <UploadedBy>
          {/* <img src={channelIcon?.url} alt="" /> */}
          {channelTitle}
        </UploadedBy>
        <DesContainer>
          <Views>{numeral(views).format("0.a").toUpperCase()} views</Views>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <UploadedDaysAgo>{moment(publishedAt).fromNow()}</UploadedDaysAgo>
        </DesContainer>
      </Description>
    </Card>
  );
}

export default Video;

const Card = styled.div`
  cursor: pointer;
`;

const Img = styled.div`
  position: relative;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
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

const Description = styled.div`
  padding: 10px 2px;
`;

const DesContainer = styled.div`
  color: #c2c2c2;
  display: flex;
  align-items: center;
`;

const Views = styled.div``;

const UploadedDaysAgo = styled.div``;

const UploadedBy = styled.div`
  color: #c2c2c2;
  margin: 5px 0;
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

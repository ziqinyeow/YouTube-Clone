import React, { useEffect } from "react";

import moment from "moment";
import numeral from "numeral";
import styled from "styled-components";
import ShowMoreText from "react-show-more-text";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  getChannelDetail,
  getSubscriptionsStatus,
} from "../redux/actions/channel.action";

const VideoMetaTag = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetail.channel);

  // const subscriptionStatus = useSelector(
  //   (state) => state.channelDetail.subscriptionStatus
  // );

  useEffect(() => {
    dispatch(getChannelDetail(channelId));
    // dispatch(getSubscriptionsStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <Container>
      <About>
        <Title>
          <h1>{channelTitle}</h1>
        </Title>
        <AboutInnerContainer>
          <VideoDescription>
            <Views>
              {numeral(viewCount).format("0.a").toUpperCase()} views
            </Views>
            <Date>{moment(publishedAt).fromNow()}</Date>
          </VideoDescription>
          <ButtonContainer>
            <Button>
              <i className="ri-thumb-up-line"></i>
              <span>{numeral(likeCount).format("0.a").toUpperCase()}</span>
            </Button>
            <Button>
              <i className="ri-thumb-down-line"></i>
              <span>{numeral(dislikeCount).format("0.a").toUpperCase()}</span>
            </Button>
            <Button>
              <i className="ri-share-forward-fill"></i>
              <span>Share</span>
            </Button>
            <More>
              <i className="ri-more-fill"></i>
            </More>
          </ButtonContainer>
        </AboutInnerContainer>
      </About>
      <Channel>
        <ChannelHeader>
          <ChannelTitle>
            <Img>
              <img src={channelSnippet?.thumbnails?.default?.url} alt="" />
            </Img>
            <ChannelName>
              <h3>{channelTitle}</h3>
            </ChannelName>
          </ChannelTitle>
          <SubscribeButton>
            Subscribe{" "}
            <span>
              {numeral(channelStatistics?.subscriberCount)
                .format("0.a")
                .toUpperCase()}
            </span>
          </SubscribeButton>
        </ChannelHeader>
        <ChannelVideoDescription>
          <ImgOverlay></ImgOverlay>
          <ShowMoreText
            /* Default options */
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            className="content"
            anchorClass="anchor"
            expanded={false}
          >
            {description}
          </ShowMoreText>
          <SubscribeButtonOverlay></SubscribeButtonOverlay>
        </ChannelVideoDescription>
      </Channel>
    </Container>
  );
};

export default VideoMetaTag;

const Container = styled.div`
  width: 100%;
`;

const About = styled.div``;

const Title = styled.div`
  padding: 20px 0 0;
  h1 {
    font-family: "Regular";
    letter-spacing: 1px;
  }
`;

const AboutInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VideoDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c2c2c2;
`;

const Views = styled.div`
  margin-right: 20px;
`;

const Date = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
`;

const Button = styled.div`
  margin: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  cursor: pointer;
  transition: all 0.2s ease;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  :hover {
    background-color: #ebebeb;
  }
`;

const More = styled.div`
  margin: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background-color: #f6f6f6;
  }
`;

const Channel = styled.div`
  margin: 20px 0;
  padding: 30px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const ChannelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ChannelName = styled.div``;

const SubscribeButton = styled.div`
  padding: 12px 25px;
  border-radius: 25px;
  color: white;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  span {
    margin-left: 10px;
  }

  :hover {
    background-color: #ee0000;
  }
`;

const ChannelVideoDescription = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 55px auto 170px;

  .content {
    line-height: 1.6;
  }
  .anchor {
    display: block;
    text-decoration: none;
    margin-top: 15px;
    color: #c2c2c2;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      color: black;
    }
  }
`;

const ImgOverlay = styled.div``;

const SubscribeButtonOverlay = styled.div``;

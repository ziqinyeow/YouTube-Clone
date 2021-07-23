import React, { useEffect } from "react";

//dependencies
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByVideoId } from "../redux/actions/comment.action";

const VideoComments = ({ video, videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  return (
    <Container>
      <TotalComments>
        {numeral(video?.statistics?.commentCount).format("0.a").toUpperCase()}{" "}
        Comments
      </TotalComments>
      {_comments?.map(
        (
          {
            authorDisplayName,
            authorProfileImageUrl,
            publishedAt,
            textDisplay,
          },
          i
        ) => (
          <CommentContainer key={i}>
            <Img>
              <img src={authorProfileImageUrl} alt="" />
            </Img>
            <Comment>
              <Header>
                <h3>
                  {authorDisplayName} &nbsp; &nbsp;{" "}
                  <span>{moment({ publishedAt }).fromNow()}</span>
                </h3>
                <p>{textDisplay}</p>
              </Header>
              <Text>
                <p></p>
              </Text>
            </Comment>
          </CommentContainer>
        )
      )}
    </Container>
  );
};

export default VideoComments;

const Container = styled.div`
  margin: 50px 0 100px;
  width: 100%;
`;

const TotalComments = styled.div`
  margin-bottom: 30px;
`;

const CommentContainer = styled.div`
  margin: 30px 0;
  min-height: 10vh;
  display: flex;
`;

const Img = styled.div`
  display: flex;
  margin-right: 20px;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Comment = styled.div``;

const Header = styled.div`
  h3 {
    margin-bottom: 10px;

    span {
      font-size: 13px;
      font-weight: 200;
      color: #c2c2c2;
    }
  }
`;

const Text = styled.div``;

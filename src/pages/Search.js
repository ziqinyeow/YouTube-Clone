import React, { useEffect } from "react";

//dependencies
import { useParams } from "react-router-dom";
import styled from "styled-components";

//component
import SearchedVideo from "../components/SearchedVideo";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../redux/actions/video.action";

const Search = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchVideo);

  return (
    <Container>
      {!loading ? (
        videos?.map((videos, i) => <SearchedVideo videos={videos} key={i} />)
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  padding: 30px 80px 0 60px;
`;

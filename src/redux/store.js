//Utils
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducers
import { authReducer } from "./reducers/auth.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comment.reducer";
import {
  homeVideoReducer,
  relatedVideoReducer,
  searchVideoReducer,
  selectedVideoReducer,
} from "./reducers/video.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideo: homeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetail: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideo: relatedVideoReducer,
  searchVideo: searchVideoReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

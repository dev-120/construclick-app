import { Action } from "../../types/store.types";
import {
  EVENTS_POSTS_SUCCESS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_PROJECTS_SUCCESS,
  NEWS_POSTS_SUCCESS,
  OPPORTUNITIES_POSTS_SUCCESS,
  PROJECTS_POSTS_SUCCESS,
} from "../actions/posts.actions";

const initialState = {
  eventsPosts: [],
  opportunitiesPosts: [],
  newsPosts: [],
  projectsPosts: [],
  allUserPosts: [],
  allUserProjects: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case EVENTS_POSTS_SUCCESS:
      return {
        ...state,
        eventsPosts: [action.payload],
      };
    case OPPORTUNITIES_POSTS_SUCCESS:
      return {
        ...state,
        opportunitiesPosts: [action.payload],
      };
    case NEWS_POSTS_SUCCESS:
      return {
        ...state,
        newsPosts: [action.payload],
      };
    case PROJECTS_POSTS_SUCCESS:
      return {
        ...state,
        projectsPosts: [...action.payload],
      };
    case FETCH_USER_POSTS_SUCCESS: 
      return {
        ...state,
        allUserPosts: [...action.payload] 
      };
    case FETCH_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        allUserProjects: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;

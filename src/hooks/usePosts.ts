import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  EVENTS_POSTS_SUCCESS,
  FETCH_PROJECTS_POSTS,
  NEWS_POSTS_SUCCESS,
  OPPORTUNITIES_POSTS_SUCCESS,
} from "../store/actions/posts.actions";
import useUser from "./useUser";
import { fetchPosts } from "../services/posts.service";

const usePosts = () => {
  const [postsEvent, setPostsEvent] = useState([]);
  const [postsNews, setPostsNews] = useState([]);
  const [postsOpportunities, setPostsOpportunities] = useState([]);
  const dispatch = useDispatch();
  const { projectsPosts } = useSelector((state: any) => state.posts);
  const { profileUser } = useUser();

  const fetchPost = async (type: string) => {
    try {
      const response = await fetchPosts(type);

      if (response.status === 200) {
        switch (type) {
          case "Evento":
            setPostsEvent(response.data.data);
            dispatch({
              type: EVENTS_POSTS_SUCCESS,
              payload: response.data.data,
            });
            break;
          case "Noticia":
            setPostsNews(response.data.data);
            dispatch({
              type: NEWS_POSTS_SUCCESS,
              payload: response.data.data,
            });
            break;
          case "Oportunidad":
            setPostsOpportunities(response.data.data);
            dispatch({
              type: OPPORTUNITIES_POSTS_SUCCESS,
              payload: response.data.data,
            });
            break;
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProjects = () => {
    dispatch({
      type: FETCH_PROJECTS_POSTS,
      payload: profileUser.id,
    });
  };

  return {
    projectsPosts,
    postsEvent,
    postsNews,
    postsOpportunities,
    fetchProjects,
    fetchPost,
  };
};

export default usePosts;

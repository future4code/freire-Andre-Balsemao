import React from "react";
import { BASE_URL } from "../../Constants/urls";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { ScreenContainer } from "./styled";
import FeedForm from "./FeedForm";
import Loading from "../../Components/Loading/Loading";
import PostCard from "../../Components/PostCard/PostCard";
import { goToPost } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate()
  const posts = useRequestData([], `${BASE_URL}/posts?page=1&size=10`);
  
  const onClickPost = (id) => {
      goToPost(navigate, id)
  }

  const postCards = posts.map((posts) => {
    return <PostCard
        key={posts.id}
        title={posts.body}
        text={posts.title}
        username={posts.username}
        onClick={() => onClickPost(posts.id)}
   
        />;
  
  });
  return (
    <ScreenContainer>
      <FeedForm/>
      {postCards.length > 0 ? postCards : <Loading/>}

    </ScreenContainer>
  );
};

export default FeedPage;

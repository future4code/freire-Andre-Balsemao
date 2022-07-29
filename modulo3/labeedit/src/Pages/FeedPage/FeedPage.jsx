import React from "react";
import { BASE_URL } from "../../Constants/urls";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { ScreenContainer } from "./styled";
import FeedForm from "./FeedForm";
import Loading from "../../Components/Loading/Loading";
import PostCard from "../../Components/PostCard/PostCard";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts?page=1&size=10`);
  console.log(posts)

  const postCards = posts.map((posts) => {
    return <PostCard 
        title={posts.body}
        text={posts.title}
        username={posts.username}
        onclick={()=>null}        
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

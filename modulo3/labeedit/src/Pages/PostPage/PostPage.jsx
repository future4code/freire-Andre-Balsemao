import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/urls";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { PostContainer, ScreenContainer } from "./styled";
import { Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";


const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const comment = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`);
    console.log(comment);
    const commentList = comment && comment.map(item =>{
        return <PostContainer 
        key={item.id}>
            {item.username}<br></br>{item.body}</PostContainer>
    }) 


  return (
    <ScreenContainer>
        <CardActionArea>
      <PostContainer>
        <Typography
        gutterBottom
        variant={"h6"}
        color={"text.primary"}
        >{commentList}</Typography>
        
      </PostContainer>
      </CardActionArea>
    </ScreenContainer>
  );
};

export default PostPage;

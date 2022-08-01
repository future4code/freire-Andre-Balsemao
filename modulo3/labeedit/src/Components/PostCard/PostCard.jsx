import React from "react";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { PostCardContainer, PostCardContent } from "./styled";

const PostCard = (props) => {
  return (
    <PostCardContainer onClick={props.onClick}>
      <CardActionArea>
        <PostCardContent>
          <Typography variant="h5" sx={{ fontSize: 12 }}>
           Enviado por: {props.username}
          </Typography>
          <Typography align={"center"}>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              username={props.username}
            >{props.title && props.title.toUpperCase()}</Typography>
          </Typography>
          
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  );
};

export default PostCard;

import React from 'react'
import {CardActionArea}  from '@mui/material'
import {CardMedia} from '@mui/material'
import {Typography} from '@mui/material'
import {PostCardContainer, PostCardContent} from './styled'

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'text'}
          alt={props.title}
          height={'150px'}
          text={props.text}
          title={props.title}
          usename={props.username}

        />
        <PostCardContent>
          <Typography align={'center'}>
            {props.title && props.title.toUpperCase()}
          </Typography>
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard

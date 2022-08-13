import styled from 'styled-components'
import {Card} from '@mui/material'
import {CardContent} from '@mui/material'

export const PostCardContainer = styled(Card)`
  width: 250px;
  margin: 10px
`

export const PostCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 80px;

`

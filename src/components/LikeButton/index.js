import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const LikeButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon color='red' size='32px' /> {likes} Likes!
    </Button>
  )
}

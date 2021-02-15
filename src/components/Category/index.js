import React from 'react'
import { Anchor, Image } from './styles'

// const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover, path, emoji }) => (
  <Anchor href={path}>
    <Image src={cover} alt='cover' />
    {emoji}
  </Anchor>
)

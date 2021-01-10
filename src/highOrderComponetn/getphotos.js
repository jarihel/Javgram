
import { gql } from 'apollo-boost'

// seteo query para las fotos con la query de categoria por id
export const GET_POTHOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

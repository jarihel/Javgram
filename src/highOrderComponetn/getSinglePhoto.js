import { gql } from '@apollo/react-hooks'

export const GET_SINGLE_PHOTOS = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
        id
        categoryId
        src
        likes
        userId
        liked
    }
}`

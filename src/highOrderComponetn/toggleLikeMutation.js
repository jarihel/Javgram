
import { gql, useMutation } from '@apollo/react-hooks'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LuikePhoto!){
    likeAnonymousPhoto(input: $imput){
        id,
        liked,
        likes
    }
}`

export const toggleLikeMutation = () => {
  const [togleLike, { error }] = useMutation(LIKE_PHOTO)
  console.log(error)
  return { togleLike }
}

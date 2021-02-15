import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import { LikeButton } from '../LikeButton/index'
import { toggleLikeMutation } from '../../highOrderComponetn/toggleLikeMutation'
// uso de la libreria de react icons, este acepta la prop size que le da el tamaño

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// hook personalizado para guardar el local storage

export const Fotocard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // key de like para local storage
  const key = `like-${id}`
  // hook lazy load para el LS
  const [show, ref] = useLazyLoad()
  // uso del hook LS que devuelve el valor y el metodo para cambiarlo y lo renombro como el boton
  const [like, setLike] = useLocalStorage(key, false)
  // icono de like
  // const Icon = like ? MdFavorite : MdFavoriteBorder

  // toggleLike para cambiar los likes
  const { togleLike } = toggleLikeMutation({ variables: { input: id } })
  // console.log()
  const handleFavClick = () => {
    setLike(!like)
    !like && togleLike()
  }
  return (
    <Article ref={ref}>
      {
        // si show es true entonces renderizo el componente en un fragment
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <LikeButton like={like} likes={likes} onClick={handleFavClick} />
          </>
      }

    </Article>
  )
}
// <ToggleLikeMutation />

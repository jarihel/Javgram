import React from 'react'
import { Fotocard } from '../Fotocard/index'
import { useQuery } from '@apollo/react-hooks'
import { GET_SINGLE_PHOTOS } from '../../highOrderComponetn/getSinglePhoto'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { override } from '../Listfotocard/styles-emotion'

// este componente devuelve fotocard
export const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  // uso de hook de graphql, con la prop del componente
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTOS, { variables: { id } })
  if (error) return 'No lo se rick.. parece no funcionar'

  console.log(data)
  return (
    <>
      {// spinner
        loading
          ? <PropagateLoader color='#FB4848' loading={loading} css={override} size={15} />
        // componente
          : <Fotocard key={data.id} {...data.photo} />
      }
    </>
  )
}

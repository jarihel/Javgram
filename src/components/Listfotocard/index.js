import React from 'react'
import { Fotocard } from '../Fotocard'
import { List } from './styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_POTHOS } from '../../highOrderComponetn/getphotos'
// LOADER IMPORT
import PropagateLoader from 'react-spinners/PropagateLoader'
import { override } from './styles-emotion'

export const Listfotocard = ({ categoryId }) => {
  // uso de hook de graphql, con la prop del componente recibe un objeto y toma el obj tal cual en el useQuery
  const { loading, error, data } = useQuery(GET_POTHOS, { variables: { categoryId } })
  // pondria un pop up de error
  if (error) return 'No lo se rick.. parece no funcionar'
  return (
    <List>
      {// spinner
        loading
          ? <PropagateLoader color='#FB4848' loading={loading} css={override} size={15} />
        // componente
          : data.photos.map(photo => <Fotocard key={photo.id} {...photo} />)
      }
    </List>
  )
}

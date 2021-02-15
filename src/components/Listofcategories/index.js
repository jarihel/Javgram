import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  // ejecuta el hook de fetch y devuelve el obj
  const { categories, loading } = useCategoriesData()

  // estado de categoria fixed
  const [showFixed, setShowFixed] = useState(false)

  // fixea la segunda categoria luego del scroll
  useEffect(() => {
    const onScroll = e => {
      // detecta cuando el scroll haga 200px
      const newShowFixed = window.scrollY > 200
      // si el estado de showfixed es diferente a esto setea un estado nuevo con este newshowfix
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
      // si es true && ejecuta esto
    }
    // escucha el evento scroll y ejecuta la funcion
    document.addEventListener('scroll', onScroll)
    // el efecto puede limpiar los eventos que usa una ves que ya no esta en actividad
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  // contruccion de las dos categorias, una fija y la otra stiky
  const renderList = (fixed) => (
    // uso de propr para el estilo
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
      }
    </List>

  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}

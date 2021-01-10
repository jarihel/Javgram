import React from 'react'
import { ListOfCategories } from './components/Listofcategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { Listfotocard } from './components/Listfotocard'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/SelectFoto'

// import { PhotoCardWithQuery } from './container/photoCardWithQuery'
export const App = () => {
  // urlparams recibe la querystring de la barra de direcciones
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  // de esta forma hago un enrutado usando querystring, si existe detailid renderiza eso y si no renderiza la lista de categorias y las fotos
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <Listfotocard categoryId={2} />
          </>

      }

    </>

  )
}
/*

*/

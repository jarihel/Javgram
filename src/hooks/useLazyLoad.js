import { useEffect, useState, useRef } from 'react'

export function useLazyLoad () {
  // LAZY LODE   --   se crea un hook para hacer referencia al elemento
  const ref = useRef(null)
  // estado para cargar lo que se vea en el viewport
  const [show, setShow] = useState(false)
  // con useefect se ejecuta el observer
  useEffect(function () {
  // uso una promesa para que si el buscador tiene el intobs no haga imprt y si no lo tiene lo cargue
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')

    ).then(() => { // impor dinamico del polyfill de int observer
    // se usa la api observer
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    }, [ref])
  })
  // devuelve el valor si se muestra o no y la referencia del elemento
  return [show, ref]
}

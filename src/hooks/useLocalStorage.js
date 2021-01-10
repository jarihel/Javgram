import { useState } from 'react'

export function useLocalStorage (key, initValue) {
  // fn local storage para almacenar el like
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initValue
    } catch (e) {
      // si no funcion storage entonces no aparece like
      return initValue
    }
  })
  // estado del boton like
  const setLocalStorage = value => {
    try {
      // storage recibe una key y el valor que va en ella
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  // el hook retorna el valor guardado y la el metodo para actualizar el valor del LS
  return [storeValue, setLocalStorage]
}

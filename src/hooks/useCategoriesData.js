import { useState, useEffect } from 'react'
// custom hook para el fetch de datos
export function useCategoriesData () {
  // estado de categoria
  const [categories, setCategories] = useState([])
  // creo el estado de carga
  const [loading, setLoading] = useState(true)
  // llamado a la api para recuperar los datos
  useEffect(() => {
    window.fetch('https://petgram-server-javier-neon.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        // cambia el estado con la respuesta
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

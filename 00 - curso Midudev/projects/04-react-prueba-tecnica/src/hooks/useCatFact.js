import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // Como la función getRandomFact es asíncrona, devuelve una promesa y hacemos el .then para obtener el valor
    getRandomFact().then(newFact => setFact(newFact)) // También se puede pasar .then(setFact)
  }
  // Versión async (no sé si fucionará (Alberto))
  // const refreshFact = async () => {
  //   const newFact = await getRandomFact()
  //   setFact(newFact)
  // }

  // para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

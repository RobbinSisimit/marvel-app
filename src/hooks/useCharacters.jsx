import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"




export const useCharacters = (page) => {
    const [characters, setCharacter] = useState()

  
  
  
  useEffect(() => {
    
    reqCharacter(((page-1)*20)).then((data) => {
        setCharacter(data.results)
    })
    
  
    
  }, [page])


  return {
    characters,
  }
}

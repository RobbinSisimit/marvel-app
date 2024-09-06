import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { useState } from 'react';

export const MarvelApp = () => {
  const [page, setPage] = useState()
  
  //console.log(characters)
  const {characters} = useCharacters(page)
  return (
    <>
        <div>
          <GridCharacters characters={characters}/>
          <Pagination count={10} variant="outlined" color="primary" onChange={(e, value) => setPage(value)}/>
        </div>
    </>
  )
}

import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { useState } from 'react';

export const MarvelApp = () => {
  const [page, setPage] = useState()
  const [name,setnam] = useState()

 
  
  console.log(name)
  //console.log(characters)
  const {characters} = useCharacters(page)
  return (
    <>
        <div>
        <input className="form-control me-2" type="text" onChange={(e/*evento*/) => {setnam(e.target.value)}}/>
        <input className="btn btn-outline-success" type ="submit" value="Buscar character"/>
          <GridCharacters characters={characters}/>
          <Pagination count={10} variant="outlined" color="primary" onChange={(e, value) => setPage(value)}/>
        </div>
    </>
  )
}

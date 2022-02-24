import { useContext } from 'react'
import CatsContext from '../context/Cats/CatsContext'

export default function Main() {
    const ctxCat = useContext(CatsContext)
    console.log(ctxCat);
  return (
      <>
        <div>Main</div> 
        <p>{ctxCat.hola}</p>
        <button onClick={ () => { ctxCat.changeName() } }>Cambiar nombre</button>
      </>
  )
}

import { useContext } from 'react'
import CatsContext from '../context/Cats/CatsContext'
import ComputersContext from '../context/Computers/ComputersContext'

export default function Menu() {
    const ctxCat = useContext(CatsContext)
    const ctxComp = useContext(ComputersContext)
  return (
    <>
        <div>Menu</div>
        <p>{ctxCat.hola}</p>
        <h1>Cat</h1>
        <button onClick={() => ctxCat.getCat() }>Ver perro</button>

        <h1>{ctxComp.brand}</h1>
        <p>{ctxComp.ram}</p>
        <p>{ctxComp.cpu}</p>
        <button onClick={ () => { ctxComp.changeMac() } }>Cambiar Mac</button>
    </>
  )
}

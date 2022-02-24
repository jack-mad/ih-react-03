// crear el estado y gestion del estado global , la informacin que el usuario decida cambiar

//importaciones
import { useReducer } from 'react'
import CatsContext from './CatsContext'
import CatsReducer from './CatsReducer'


//funcion de estado global 
const CatsState = (props) => {
    //estado inicial 
    const initialState ={ //debe iniciar con algo
        hola: 'mundo',
        cats: []
    }
    //gestion de las funciones que cambian el estado inicial 
    const [globalState, dispatch] =useReducer(CatsReducer, initialState) //dispatch : disparadores
    // funciones API/side effects functions
    const changeName = () => {
        console.log("hola");
        dispatch({  //el objeto dentro del dispatch se llama action
            type: 'CHANGE_NAME',
            payload: 'Ironhack'
        })
    }
    //retornos

    return (
        <CatsContext.Provider 
        value={
                {
                    hola: globalState.hola,
                    cats: globalState.cats,
                    changeName
                }
               }>
            {props.children}
        </CatsContext.Provider>
    )
}

//exportacion
export default CatsState
import { useReducer } from 'react'
import ComputersContext from "./ComputersContext";
import ComputersReducer from "./ComputersReducer"

const ComputersState = (props) => {
    const initialState = {
        ram: '32GB Unified Memory',
        cpu: 'Apple Silicon M1 Max 10 cores',
        brand: 'MacBook Pro 16"'
    }

    const [globalState, dispatch] = useReducer(ComputersReducer, initialState)
    const changeMac = () =>{ 
        dispatch({
            type: 'CHANGE_MAC',
            payload: {
                ram: '16GB Unified Memory',
                cpu: 'Apple Silicon M1 10 cores',
                brand: 'MacBook Pro 14"'
            }
        })
    }

    return(
        <ComputersContext.Provider
            value={{
                ram: globalState.ram,
                cpu: globalState.cpu,
                brand: globalState.brand,
                changeMac
            }}>
            {props.children}
        </ComputersContext.Provider>
    )
}
export default ComputersState
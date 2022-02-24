const reducer = (globalState, action) =>{
    switch (action.type) {
        case 'CHANGE_MAC':
            return{
                ...globalState,
                cpu: action.payload.cpu,
                ram: action.payload.ram,
                brand: action.payload.brand
            }
        default:
            return globalState
    }
}
export default reducer
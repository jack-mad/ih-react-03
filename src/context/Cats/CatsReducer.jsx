const reducer = (globalState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...globalState,
                hola: action.payload
            }
        default:
            return globalState
    }
}
export default reducer
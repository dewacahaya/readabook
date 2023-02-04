const Reducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                useFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                useFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                useFetching: false,
                error: false,
            };
            default:
                return state;
    }
}

export default Reducer;
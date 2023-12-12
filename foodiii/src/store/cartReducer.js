
const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            console.log("Action Payload:", action.payload);
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        default:
            console.log("Error in Reducer");
            return state;
    }
};

export default reducer;

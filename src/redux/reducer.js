import { CALCULATE_SUCCESS } from "./types";

const initial = {
    data: {},
};

export const calculatorReducer = (state = initial, action) => {
    switch (action.type) {
        case CALCULATE_SUCCESS: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default: {
            return { ...state };
        }
    }
};

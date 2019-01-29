import { SWITCH_MENU_LEFT_OPEN } from "./switchMenuLeftOpen";

const initState = {
    menuLeftOpen: false, // Открыто окно 
};

function switchMenuLeftOpenReducer(state = initState, action) {
    if (action.type === SWITCH_MENU_LEFT_OPEN) {
        let newState = {...state};
        newState.isOpen = action.isOpen;
        return newState;
    }

    return state;

}

export default switchMenuLeftOpenReducer;
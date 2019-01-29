const SWITCH_MENU_LEFT_OPEN = 'SWITCH_MENU_LEFT_OPEN';

const switchMenuLeftOpen = (param) => {
    return {
        type: SWITCH_MENU_LEFT_OPEN,
        isOpen: param,
    };
};

export {switchMenuLeftOpen, SWITCH_MENU_LEFT_OPEN};
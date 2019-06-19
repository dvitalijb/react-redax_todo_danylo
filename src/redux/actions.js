export const UPDATE_INPUT = 'update_input';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const TOGGLE_ITEM = 'toggle_item';
export const CHANGE_COMPLETED_FOR_ALL = 'change_completed_for_all';
export const REMOVE_COMPLETED = 'remove_completed';
export const CHANGE_DISPLAY_MODE = 'change_display_mode';

export function updateInput(inputValue) {
    return {
        type: UPDATE_INPUT,
        inputValue
    };
}

export function addItem(itemTitle) {
    return {
        type: ADD_ITEM,
        itemTitle
    };
}

export function removeItem(itemId) {
    return {
        type: REMOVE_ITEM,
        itemId
    };
}

export function toggleItem(itemId) {
    return {
        type: TOGGLE_ITEM,
        itemId
    };
}

export function changeCompletedForAll(completed) {
    return {
        type: CHANGE_COMPLETED_FOR_ALL,
        completed
    };
}

export function removeCompleted() {
    return {
        type: REMOVE_COMPLETED
    };
}

export function changeDisplayMode(displayMode) {
    return {
        type: CHANGE_DISPLAY_MODE,
        displayMode
    };
}
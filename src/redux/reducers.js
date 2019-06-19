import {UPDATE_INPUT, ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, CHANGE_COMPLETED_FOR_ALL, REMOVE_COMPLETED, CHANGE_DISPLAY_MODE} from './actions';

const initialState = {
    input: '',
    nextId: 1,
    items: [
    ],
    display: 'all'
};

export function getNextState(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                input: action.inputValue
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, {
                    id: state.nextId,
                    title: action.itemTitle,
                    completed: false
                }],
                nextId: state.nextId + 1
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            };
        case TOGGLE_ITEM:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id !== action.itemId) {
                        return item;
                    } else {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                })
            };
        case CHANGE_COMPLETED_FOR_ALL:
            return {
                ...state,
                items: state.items.map(item => {
                    return {
                        ...item,
                        completed: action.completed
                    };
                })
            };
        case REMOVE_COMPLETED:
            return {
                ...state,
                items: state.items.filter(item => !item.completed)
            };
        case CHANGE_DISPLAY_MODE:
            return {
                ...state,
                display: action.displayMode
            };
        default:
            return state;
    }
}
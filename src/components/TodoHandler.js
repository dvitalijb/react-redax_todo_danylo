import {connect} from 'react-redux';
import Todo from "./Todo";
import {
    addItem,
    updateInput,
    toggleItem,
    removeItem,
    changeCompletedForAll,
    changeDisplayMode,
    removeCompleted
} from "../redux/actions";
import React from "react";

function mapStateToProps(state) {
    return {
        input: state.input,
        items: state.items,
        display: state.display
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateInput: (inputValue) => dispatch(updateInput(inputValue)),
        addItem: (itemTitle) => dispatch(addItem(itemTitle)),
        toggleItem: (itemId) => dispatch(toggleItem(itemId)),
        removeItem: (itemId) => dispatch(removeItem(itemId)),
        changeCompletedForAll: (completed) => dispatch(changeCompletedForAll(completed)),
        changeDisplayMode: (displayMode) => dispatch(changeDisplayMode(displayMode)),
        removeCompleted: () => dispatch(removeCompleted())
    };
}

const TodoHandler = connect(mapStateToProps, mapDispatchToProps)(Todo);

// function TodoHandler() {
//     const state = store.getState();
//     const dispatch = store.dispatch;
//
//     return <Todo input={state.input}
//                  items={state.items}
//                  display={state.display}
//
//                  updateInput={(inputValue) => dispatch(updateInput(inputValue))}
//                  addItem={(itemTitle) => dispatch(addItem(itemTitle))}
//     ></Todo>;
// }

export default TodoHandler;
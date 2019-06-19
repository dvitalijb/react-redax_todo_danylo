import React, {Component} from 'react';
import TodoItem from './TodoItem';
import './Todo.css';
import MarkAll from "./MarkAll";
import InfoPanel from "./InfoPanel";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.newItemChanged = this.newItemChanged.bind(this);
        this.newItemKeyDown = this.newItemKeyDown.bind(this);
        this.statusChanged = this.statusChanged.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.markAllChanged = this.markAllChanged.bind(this);
        this.displayChanged = this.displayChanged.bind(this);
        this.removeCompletedClicked = this.removeCompletedClicked.bind(this);
    }

    newItemChanged(event) {
        this.props.updateInput(event.target.value);
    }

    newItemKeyDown(event) {
        if (event.key === 'Enter' && this.props.input.trim() !== '') {
            this.props.addItem(this.props.input);
            this.props.updateInput('');
        }
    }

    statusChanged(itemId, completed) {
        this.props.toggleItem(itemId);
    }

    itemRemoved(itemId) {
        this.props.removeItem(itemId);
    }

    markAllChanged(checked) {
        this.props.changeCompletedForAll(checked);
    }

    displayChanged(displayType) {
        this.props.changeDisplayMode(displayType);
    }

    removeCompletedClicked() {
        this.props.removeCompleted();
    }

    render() {
        return (
            <section className="todo">
                <input className="new-item" type="text" value={this.props.input}
                       onChange={this.newItemChanged} onKeyDown={this.newItemKeyDown} />
                <MarkAll checked={this.props.items.every(item => item.completed)}
                         changed={this.markAllChanged}/>
                <section className="items">
                    {this.props.items.filter(item =>
                        this.props.display === 'all'
                        || this.props.display === 'completed' && item.completed
                        || this.props.display === 'active' && !item.completed)
                        .map(item =>
                        <TodoItem key={item.id} item={item}
                                  statusChanged={this.statusChanged} itemRemoved={this.itemRemoved}
                        />
                    )}
                </section>
                <InfoPanel
                    left={this.props.items.filter(item => !item.completed).length}
                    completed={this.props.items.some(item => item.completed)}
                    display={this.props.display} displayChanged={this.displayChanged}
                    removeClicked={this.removeCompletedClicked}
                />
            </section>
        );
    }
}

export default Todo;
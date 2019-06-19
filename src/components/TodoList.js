import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requested: false,
            loadedUsers: false,
            loadedTodos: false,
            articles: null,
            users: null,
            todos: null,
            filteredTodos: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.filterChanged = this.filterChanged.bind(this);
    }

    handleClick() {
        this.setState({
            requested: true
        });

        const xhrTodos = new XMLHttpRequest();
        const xhrUsers = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/';

        xhrTodos.open('GET', `${url}todos`);
        xhrUsers.open('GET', `${url}users`);

        xhrTodos.addEventListener('load', () => {
            const dataTodos = JSON.parse(xhrTodos.response);
            this.setState({
                loadedTodos: true,
                todos: dataTodos,
                filteredTodos: dataTodos
            });
        });
        xhrUsers.addEventListener('load', () => {
            this.setState({
                loadedUsers: true,
                users: JSON.parse(xhrUsers.response)
            });
        });

        xhrTodos.send();
        xhrUsers.send();
    }

    filterChanged(event) {
        const todosAfterFilter = this.state.todos.filter(post => {
            return post.title.includes(event.target.value);
        });
        this.setState(
            {filteredTodos: todosAfterFilter}
        );
    }

    render() {
        if (!this.state.requested) {

            return <input type="button" onClick={this.handleClick} value="Download todos!" />;
        } else if (this.state.loadedUsers && this.state.loadedTodos) {
            this.userMap = this.state.users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
            const todos = this.state.filteredTodos.map(todo => (
              <TodoItem title={todo.title}
                completed={todo.completed}
                key={todo.id}
                user={this.userMap[todo.userId]}
              />
            ));

            return (
                <div>
                    <input type="text" placeholder="search by title" onChange={this.filterChanged}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Completed</th>
                                <th>User</th>
                            </tr>
                        </thead>
                            <tbody>
                                {todos}
                            </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <input type="button" disabled={true} value="Loading..."/>
            );
        }
    }
}

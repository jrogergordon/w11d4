import React from 'react'
import ReceiveTodo from './todo_list'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: '',
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ReceiveTodo = this.ReceiveTodo.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    updateDone(e) {
        this.setState({ done: e.target.value });
    }


    render() {
        return (
            <form onSubmit={this.ReceiveTodo}>
                <h1>Your ToDo List!</h1>
                <br />
                <h2>Add One!</h2>
                <label>Title
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    </label>
                    <label>Body
                        <input type="text" value={this.state.body} onChange={this.updateBody} />
                    </label>
                    <label>Done?
                        <label>True</label>
                            <input type="radio" name="true" value="True">
                            </input>

                        <label>False</label>
                            <input type="radio" name="false" value="False">
                            </input>
                </label>

                <input type="submit" value="Add Activity" />
            </form>
        )
    }
}
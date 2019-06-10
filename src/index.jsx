//import preact from 'preact';
import { h, render, Component } from 'preact';

class TodoList extends Component {
    render () {
        return <h1>Hello world!</h1>
    }
}

render(<TodoList/>, document.body)

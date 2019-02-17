import React , {Component} from 'react'

class TaskList extends Component {
    render () {
        if ( this.props.tasks)
        return (
            <div>
                <ol>{
                this.props.tasks.map( (item) => (
                    <li key={item.id}> {item.task} {item.location} {item.date.toLocaleTimeString()}</li>
                ))
            } </ol>
            </div>
        )
    }

}

export default TaskList
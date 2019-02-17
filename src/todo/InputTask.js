import React , {Component} from 'react';


class InputTask extends Component {
    state = {
        task : '',
       location:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            
        })
        console.log(e.target.name)
    }
    render (){
        return (
            <div>
                {/* <input type="hidden" name="id" value={this.props.id} /> <br/> */}
                <h2>add activite</h2>
                <input type="text" name="task" onChange={this.handleChange} /> <br/>
                <input type="text" name="loaction" onChange={this.handleChange} /> <br/>
                 <button onClick={ () => this.props.addTask(this.state.task,this.state.loaction,this.state.date)}>Add</button>
            
            </div>
        )            
    }
}

export default InputTask 
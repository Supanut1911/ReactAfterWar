import React,{Component} from 'react';
import axios from 'axios';

class Github extends Component {

    state = { 
        user: 'Github',
        data:''
    }
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
            
        })
        // console.log(e.target.name)
    }

    changeUser = () => {
        this.setState({
            user:this.state.user
        })
         console.log(this.state.user);
         this.fetchUser(this.state.user)
    }
 
    render() {
        const {data} = this.state
        
        if (data)
            return ( <div>
                        <div>
                            <input type="text" name="user" onChange={this.handleChange}></input>
                            <button onClick={ () => this.changeUser(this.state.user)}>Search</button>
                        </div>
                    <div>
                        <br />
                        {data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="200px"/> 
                    </div>

                </div> )


            return (
                <div>
                <input type="text" name="user" onChange={this.handleChange}></input>
                <button onClick={ () => this.changeUser(this.state.user)}>Search</button>
            </div> 
            );
    }
 }
 
 export default Github
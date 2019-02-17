import React , {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import TaskList from './todo/TaskList';
import InputTask from './todo/InputTask';
import Github from "./Github/index";
import Middle from './components/mech/Middle';
import Axios from 'axios';

class App extends Component{

    
    state = {
      count:5,
      tasks: [ {id:"1" , task:"coding" ,location:'lab' ,date:new Date()} ,
               {id:"2" , task:"reading",location:"library" ,date:new Date()}],
      pokemons:"",
      id : 3
    }
  
    constructor(props){
      super(props)
      this.add = this.add.bind(this)
      this.sub = this.sub.bind(this)
    }

    add = () => {
    this.setState({
      count:this.state.count + 1
      })
    }
    sub = () => {
      this.setState({
        count:this.state.count - 1
        })
      }

    addTask = (task,location,date) => {
      this.setState({
        tasks: [...this.state.tasks  , {id: this.state.id,task,location,date:new Date()}] ,
        
        id : this.state.id+1
      })
    }
  
    componentDidMount(){
//       this.setState({pokemons:[
//         { id:1 , pokemonName: "Charmander" , type: "Fire" ,thumbnail: "/image/pokemon/1.png" },
//         { id:2 , pokemonName: "charmeleon" , type: "Fire" ,thumbnail: "/image/pokemon/2.png" },
//         { id:3 , pokemonName: "Charizard" , type: "Fire" ,thumbnail: "/image/pokemon/3.png" },
//         { id:4 , pokemonName: "Bulbasaur" , type: "Grass" ,thumbnail: "/image/pokemon/4.png" },
//         { id:5 , pokemonName: "Lvysaur" , type: "Grass" ,thumbnail: "/image/pokemon/5.png" },
//         { id:6 , pokemonName: "Venusaur" , type: "Grass" ,thumbnail: "/image/pokemon/6.png" },
//         { id:7 , pokemonName: "Squirtle" , type: "Water" ,thumbnail: "/image/pokemon/7.png" },
//         { id:8 , pokemonName: "Wartortle" , type: "Water" ,thumbnail: "/image/pokemon/8.png" },
//         { id:9 , pokemonName: "Blastoise" , type: "Water" ,thumbnail: "/image/pokemon/9.png" },
// ]
      Axios.get("http://localhost:3001/pokemon").then( (res) => {
        console.log(res.data);
        this.setState({pokemons:res.data})
      })
}
    

    render () {
      // console.log(this.state.pokemons)
      return (
        <div>
          <Header/>
          <hr />
            <h3>Counter : {this.state.count}</h3>
            <button className="btn btn-success " onClick={this.add}>Up</button>
            <button className="btn btn-danger " onClick={this.sub}>down</button>
          <h1>ToDo</h1>
          <TaskList tasks={this.state.tasks} date={this.state.date} />
          <InputTask addTask={this.addTask} id={this.state.id} />
          <hr />
          <h2>GitHub</h2>
          <Github/>
          <hr />
          <h2>Pokemon from API Json server</h2>
          <Middle pokemons={this.state.pokemons}/>
          <hr />
          <Footer name="Supanut Laddayam" id="5935512049"/>
        </div>
      )
        
    }
}

export default App
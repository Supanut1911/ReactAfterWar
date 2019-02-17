import React , {Component} from 'react'
import PokemonList from '../pokemon/PokemonList';

class Middle extends Component {
    render () {
        //console.log(this.props.pokemons)
        return (
            <div className="container-fluid">
                <PokemonList pokemons={this.props.pokemons}/>
            </div>
        )
    }
}

export default Middle
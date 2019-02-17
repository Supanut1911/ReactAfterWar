import React ,{Component} from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {

    constructor(props){
        super(props);

    }

    showPokemon = () => {
        return (
            this.props.pokemons && this.props.pokemons.map( (res) => (
                <Pokemon key={res.id} {...res}/>
            ))
        );
    }
    
    render (){
        // console.log(this.props.pokemons)
        return (
            <div className="row">
                {this.showPokemon()}
            </div>
        )
    }
}

export default PokemonList
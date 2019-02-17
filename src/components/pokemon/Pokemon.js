import React , {Component} from 'react';

class Pokemon extends Component {

    render () {
        const {pokemonName , type ,thumbnail} = this.props;
        return (
            <div className="col-md-4 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h2 className="text-center">{pokemonName}</h2>
                <p className="text-center">{type}</p>
                <hr/>
            </div>
        )
    }
}
export default  Pokemon
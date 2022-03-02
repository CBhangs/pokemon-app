const React = require('react')
const titleStyle = {
    color: 'blue',
    // backgroundColor: '#000000',
};

class Index extends React.Component {
    render(){
        const pokemons = this.props.pokemons
        console.log(pokemons)
        return (
            <div>
                <h1 style={titleStyle} >See All The Pokemon!</h1>
                <ul>
                    {
                        pokemons.map((pokemon,index) => {
                            return(
                                <li key={index}>
                                    <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                                    <img src={pokemon.img}></img>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


module.exports = Index;
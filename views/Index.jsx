const React = require('react')

class Index extends React.Component {
    render(){
        const pokemon = this.props.pokemon
        console.log(pokemon)
        return (
            <div>
                <h1>See All The Pokemon!</h1>
            </div>
        )
    }
}


module.exports = Index;
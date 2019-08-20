import React from 'react'
import axios from 'axios'


class ListPokemons extends React.Component {
  state = {
    pokemons: []
  }


  async componentDidMount() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    this.setState({
      pokemons: response.data.results
      
    }) 

    console.log(response.data.results)
  }  
  

  render() {
    return(
      <div>        
        { this.state.pokemons.length !== 0 ?
          this.state.pokemons.map(poke => 
          (
            <div key={poke.name}>
              <h2>{poke.name}</h2>
              <h4><a href={poke.url}>Ver Mais</a></h4>
              -----------------------------------------------------------------
            </div>
          )) 
          :
          <h2>Carregando...</h2>
        }
        
      </div>
    )
  }
}

export default ListPokemons
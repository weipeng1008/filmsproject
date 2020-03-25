import React from 'react';
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid'
import FilmTile from './FilmTile'

class Film extends React.Component {

    state = {
        films : []
    }

constructor(){
super()
}

    componentDidMount() {
      fetch("http://www.omdbapi.com/?s=Harry&apikey=87d10179")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                films:result.Search
            })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
                console.log(error)
            }
        )
    }

render(){

    return (
    <div>
        <Navbar/>
        <Grid container spacing={3}>
            {
                this.state.films.map(film=>(
                    <Grid item xs={3}>
                    <FilmTile film={film}/>
                    </Grid>
                ))
            }
            
        </Grid>
    </div>
)

}

}

export default Film;
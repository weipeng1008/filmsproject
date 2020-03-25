import React from 'react';
import FilmMoreDetails from './FilmMoreDetails'

class FilmDetail extends React.Component {

    state = {
        filmDetail : []
    }

    constructor(){
        super()
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?i=tt0241527&apikey=87d10179")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                  filmDetail:result.Search
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
    //var id = this.props.match.params.id

    return (
    <div>{
        this.state.filmDetail.map(filmDetail=>(
    
            <FilmMoreDetails filmDetail={filmDetail}/>
            
        ))
    } </div>
    )
}
}
export default FilmDetail;
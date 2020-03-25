import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom"

function FilmMoreDetail(props){
    return(
        <div>
    <Card>
    <CardActionArea>
        <CardMedia
          style={{height:100, paddingTop:'56.25%'}}
          image={props.film.Poster}
          title={props.film.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.film.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Year}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Released}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Runtime}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Genre}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Director}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Writer}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Actors}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Plot}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Language}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {props.film.Country}
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link to={`/films/filmDetail/${props.filmMoreDetail.imdbID}`}>
          </Link>
      </CardActions>
      </Card>
      </div>
    )
}


export default FilmMoreDetail;

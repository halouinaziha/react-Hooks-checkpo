import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating, CardActions } from '@mui/material'

const MovieCard = (movie) => {

return (
    <Card sx={{ maxWidth: 250 }}>
    <CardMedia
      sx={{ height: 300 }}
      image={movie.posterUrl}

    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {movie.descriptipn}
      </Typography>
    </CardContent>
    <CardActions>
    <Rating name="read-only" value={movie.rating} readOnly />
    </CardActions>
  </Card>
)
}

export default MovieCard;
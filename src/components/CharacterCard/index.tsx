import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { CharacterCardProps } from 'interfaces/CharacterCardProps'
import './styles.scss'

export default function CharacterCard(props: CharacterCardProps) {
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography variant="body2">Name: {props.name}</Typography>
        <Typography variant="body2">Height: {props.height}</Typography>
        <Typography variant="body2">Mass: {props.mass}</Typography>
        <Typography variant="body2">Gender: {props.gender}</Typography>
      </CardContent>
      <CardActions>
        <Link className="learn-more" to={`/character/${props.name}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  )
}

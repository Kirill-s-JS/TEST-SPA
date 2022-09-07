import { useCallback } from 'react'
import Grid from '@mui/material/Grid'
import './styles.scss'
import { Link, useParams } from 'react-router-dom'
import { getCharacter } from 'api/axios'
import { useAsync } from 'hooks/useAsync'
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import { CharacterCardProps } from 'interfaces/CharacterCardProps'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function CharacterPage() {
  const { name } = useParams()
  const memGetCharacter = useCallback(() => getCharacter(name), [name])
  const { status, value } = useAsync<CharacterCardProps>(memGetCharacter)

  if (status === 'pending') return <CircularProgress />

  return (
    <>
      <Box>
        <Button>
          <Link className="feed-btn" to="/feed">
            Feed
          </Link>
        </Button>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 33 + 'px',
            fontFamily: 'sans-serif',
            marginBottom: 24 + 'px',
          }}
        >
          {value?.name}
        </Typography>
      </Box>
      <Grid container spacing={2} columns={1}>
        <Grid item lg={1}>
          <Item>
            <Typography>Height: {value?.height}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Mass: {value?.mass}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Hair color: {value?.hair_color}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Skin color: {value?.skin_color}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Eye color: {value?.eye_color}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Birth year: {value?.birth_year}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Gender: {value?.gender}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Homeworld: {value?.homeworld}</Typography>
          </Item>
        </Grid>
        <Grid item lg={1}>
          <Item>
            <Typography>Films: {value?.films.join(', ')}</Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default CharacterPage

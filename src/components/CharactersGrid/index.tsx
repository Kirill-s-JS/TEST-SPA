import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CharacterCard from '../../components/CharacterCard'
import { CharacterCardProps } from 'interfaces/CharacterCardProps'

interface CharactersGridProps {
  charactersData: CharacterCardProps[]
}

export default function CharactersGrid({
  charactersData,
}: CharactersGridProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {charactersData.map((el) => {
          return (
            <Grid item key={el.name}>
              <CharacterCard {...el} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

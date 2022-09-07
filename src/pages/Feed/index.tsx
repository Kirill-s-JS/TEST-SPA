import CharactersGrid from '../../components/CharactersGrid'
import { useCallback, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import './styles.scss'
import { getCharactersData } from 'api/axios'
import { CharacterCardProps } from 'interfaces/CharacterCardProps'
import { useAsync } from 'hooks/useAsync'
import { addCharactersAC } from 'store/actionCreators'
import { useAppSelector, useAppDispatch } from 'store'

function FeedPage() {
  const [page, setPage] = useState<number>(1)
  const { characters } = useAppSelector((characters) => characters)
  const dispatch = useAppDispatch()
  const memGetCharacters = useCallback(() => getCharactersData(page), [page])
  const { status, value, execute } = useAsync<CharacterCardProps[]>(
    memGetCharacters,
    Boolean(page !== 1 && characters && !characters[page])
  )

  useEffect(() => {
    execute()
    dispatch(addCharactersAC({ characters: value, page }))
  }, [])

  useEffect(() => {
    if (characters && characters[page]) return
    dispatch(addCharactersAC({ characters: value, page }))
  }, [value])

  return (
    <>
      {characters && value && (
        <>
          <CharactersGrid
            charactersData={characters[page] ? characters[page] : value}
          />
          <Box className="pagination-btn--wrapper">
            <Button
              variant="outlined"
              disabled={page === 1}
              onClick={() => {
                setPage((page) => page - 1)
              }}
              className="pagination-btn"
            >
              Previous page
            </Button>
            <Button
              variant="outlined"
              disabled={page === 9}
              onClick={() => {
                setPage((page) => page + 1)
              }}
              className="pagination-btn"
            >
              Next page
            </Button>
          </Box>
        </>
      )}
      {status === 'pending' && <p className="loading-btn">Loading...</p>}
    </>
  )
}

export default FeedPage

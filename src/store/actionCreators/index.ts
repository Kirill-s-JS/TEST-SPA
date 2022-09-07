import { CharacterCardProps } from '../../interfaces/CharacterCardProps'
import { ADD_CHARACTERS } from 'store/actions'

export interface AddCharactersPayload {
  page: number
  characters: Array<CharacterCardProps> | null
}
export const addCharactersAC = (payload: AddCharactersPayload) => ({
  type: ADD_CHARACTERS,
  payload,
})

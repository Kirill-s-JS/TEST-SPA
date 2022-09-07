import { CharacterCardProps } from 'interfaces/CharacterCardProps'

export interface InitialState {
  characters: Record<string, Array<CharacterCardProps>> | null
}

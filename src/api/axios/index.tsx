import axios from 'axios'
import { CharacterCardProps } from 'interfaces/CharacterCardProps'

const appAxios = axios.create({
  baseURL: 'https://swapi.dev/api/people',
})

export function getCharacter(name: string | undefined) {
  return appAxios
    .get(`/?search=${name}`)
    .then((rsp: any) => rsp.data.results[0])
}

export function getCharactersData(page: number) {
  return appAxios
    .get(`/?page=${page}`)
    .then((rsp: { data: { results: Array<CharacterCardProps> } }) =>
      rsp.data.results
    )
}

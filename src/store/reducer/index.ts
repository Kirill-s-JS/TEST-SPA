import { InitialState } from 'interfaces/InitialState'
import { ADD_CHARACTERS } from 'store/actions'
import { AddCharactersPayload } from 'store/actionCreators'

const initialState: InitialState = {
  characters: null,
}

const appReducer = (
  state = initialState,
  action: { type: string; payload: AddCharactersPayload }
) => {
  switch (action.type) {
    case ADD_CHARACTERS: {
      return {
        ...state,
        characters: {
          ...(state.characters && state.characters),
          [action.payload.page]: action.payload.characters,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer

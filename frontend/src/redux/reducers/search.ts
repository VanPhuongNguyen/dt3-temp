import { Types } from 'redux/actions/search'
import { Action } from 'types'

const INITIAL_STATE = {}

export default function search(state= INITIAL_STATE, action: Action):any {
    switch (action.type) {
        case Types.CREATE_SEARCH: {
            return {
                ...state,
                search: action.payload
            }
        }
        default: return state
    }
}
import { Action } from "types"

export const Types = {
    CREATE_SEARCH: 'search/create-search',
    GET_SEARCH: 'search/get-search'
}

export const createSearch = (text :any):Action => ({
    type: Types.CREATE_SEARCH,
    payload: {
        text
    }
})

export const getSearch = ():Action => ({
    type: Types.GET_SEARCH
})
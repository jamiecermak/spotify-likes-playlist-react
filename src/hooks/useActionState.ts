import { useReducer } from 'react'

export enum ActionStage {
    LOADING,
    ERROR,
    SUCCESS,
    RESET,
}

export interface ActionState {
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    errorMessage: string | null
}

interface Action {
    type: ActionStage
    payload?: string
}

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
}

function reducer(state: ActionState, action: Action): ActionState {
    switch (action.type) {
        case ActionStage.LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                errorMessage: null,
            }
        case ActionStage.ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                errorMessage: action.payload || 'Failed to login.',
            }
        case ActionStage.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                errorMessage: null,
            }
        case ActionStage.RESET:
            return initialState
        default:
            throw new Error('Invalid Action Type')
    }
}

export default function useActionState() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch] as const
}

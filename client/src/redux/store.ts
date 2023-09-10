import {createStore, combineReducers} from 'redux'


const initialState:any = {
    username: ''
}


const reducer = (state = initialState, action:any) => {
    if(action.type === 'EDIT'){
       return  {
           ...state,
           username: action.payload
       }
    }

    return state
}



const rootReducers = combineReducers({
    reducer
})


export const store = createStore(rootReducers)
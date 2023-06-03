import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { sectionReducer } from './sectionReducer'
import { storeReducer } from './storeReducer'
import { listReducer } from './listReduser'

// const savedState = JSON.parse(localStorage.getItem('store')) || {
//     section: {
//         section: 'burgers',
//     },
//     store: {
//         store: [],
//         count: 0,
//         sum: 0
//     },
//     list: {
//         menu: [],
//         section: 'burgers',
//         search: '',
//     }
// };

const rootReducer = combineReducers({
    section: sectionReducer,
    store: storeReducer,
    list: listReducer
})

const store = configureStore({ reducer: rootReducer })
// const store = configureStore({ reducer: rootReducer, preloadedState: savedState ? savedState : null })

store.subscribe(()=>{
    console.log('changing local storage')
    const state = store.getState();
    localStorage.setItem('store', JSON.stringify(state));
})

export default store
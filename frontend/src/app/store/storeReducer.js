
// const local_storage = new Storage(JSON.parse(localStorage.getItem('store')))

// all actions
const ADD_POSITION ='ADD_POSITION'
const REMOVE_POSITION = 'REMOVE_POSITION'
const FORCE_REMOVE_POSITION = 'FORCE_REMOVE_POSITION'

const defaultState = {
    store: [],
    count: 0,
    sum: 0
}

export const storeReducer = ( state = defaultState, action) => {

    switch (action.type) {

        case ADD_POSITION:
            // local_storage.push(state)
            return {
                ...state,
                store: updateCartItems(state.store, action.position, ADD_POSITION),
                count: updateCount(state.count, action.position, ADD_POSITION),
                sum: updateSum(state.sum, action.position, ADD_POSITION)
            }   

        case REMOVE_POSITION:

            return {
                ...state,
                store: updateCartItems(state.store, action.position, REMOVE_POSITION),
                count: updateCount(state.count, action.position, REMOVE_POSITION),
                sum: updateSum(state.sum, action.position, REMOVE_POSITION)
            }

        case FORCE_REMOVE_POSITION:

            return {
                ...state,
                store: updateCartItems(state.store, action.position, FORCE_REMOVE_POSITION),
                count: updateCount(state.count, action.position, FORCE_REMOVE_POSITION),
                sum: updateSum(state.sum, action.position, FORCE_REMOVE_POSITION)
            }

        default:

            return { ...state }
    }
}

const updateCartItems = (store, position, action) => {

    const itemIndex = store.findIndex(({id})=>{ return id == position.id})
    console.log(itemIndex)
    const item = store[itemIndex]

    if(action === 'FORCE_REMOVE_POSITION') {
        return [...store.slice(0, itemIndex), ...store.slice(itemIndex + 1) ]
    }

    let newItem

    if (item) {
        newItem = action === 'ADD_POSITION' ? 
        {...item, amount: item.amount + 1 }
        :
        {...item, amount: item.amount - 1 }

        if(newItem.amount === 0) {
            return [...store.slice(0, itemIndex), ...store.slice(itemIndex + 1) ]
        }

    } else {
        newItem = position
    }

    if (itemIndex === -1){ return [ ...store, position ] }

    return [ ...store.slice(0, itemIndex), newItem, ...store.slice(itemIndex + 1) ]
}

const updateCount = (count, position, action) => {
    if (action === 'ADD_POSITION'){ return count += 1 }
    else if (action === 'REMOVE_POSITION'){ return count -= 1 }
    else if (action === 'FORCE_REMOVE_POSITION'){ return count -= position.amount }
}

const updateSum = (sum, position, action) => {
    if(action === 'ADD_POSITION'){
        return sum + position.price
    } else {
        return sum - position.price
    }
}


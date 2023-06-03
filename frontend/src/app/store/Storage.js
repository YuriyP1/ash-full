let instance = null

export default class Storage1 {

    constructor(localStorage){

        if(instance){
            return instance
        } else {
            instance = this
        }

        const defaultState = {
            store: [],
            count: 0,
            sum: 0
        }
    }

    push(state){
        //converting store.array in obj
        // const objStore = Object.assign({}, state)
        // console.log(objStore)

        //converting obj in json and push in localStorage
        localStorage.setItem('store', JSON.stringify(2));

        // console.log(objS)

    }

    pull(){

    }

}
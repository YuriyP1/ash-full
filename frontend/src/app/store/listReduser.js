import menu from '../../assets/menu/menu.json'

const SET_SECTION ='SET_SECTION'
const SET_SEARCH ='SET_SEARCH'

const defaultState = {
    menu: [],
    section: '',
    search: '',
}

export const listReducer = ( state = defaultState, action) => {

    switch (action.type) {

        case SET_SECTION:
            return {
                ...state,
                section: action.section,
                menu: menu.menu.filter(({ chapter }) => chapter.toLowerCase().includes(action.section?.toLowerCase()))
            }   
        case SET_SEARCH:

            return {
                ...state,
                section: action.section,
                menu: menu.menu.filter(({ title }) => title.toLowerCase().includes(action.searchTerm?.toLowerCase()))
            }   
        default:
            return { ...state }
    }
}
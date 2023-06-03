const SET_SECTION ='SET_SECTION'

const defaultState = {
    section: 'roll',
}

export const sectionReducer = ( state = defaultState, action) => {

    switch (action.type) {

        case SET_SECTION:
            return {
                ...state,
                section: action.section
            }   
        default:
            return { ...state }
    }
}


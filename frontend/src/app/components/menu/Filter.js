import menu from '../../../assets/menu/menu.json'

class Filter {
    constructor(){
        this.actualList = null
    }

    filtering(searchText = '', section = 'roll' ){
        if(searchText != ''){
            menu.menu.filter(({ title }) => title.toLowerCase().includes(searchText?.toLowerCase()))
        }

        if(searchText === ''){
            this.actualList = menu.menu.filter(({ chapter }) => chapter.toLowerCase().includes(section.toLowerCase()))
        }
        return this.actualList
    }
}

const FilterClass = new Filter()
export default FilterClass
import { useState } from "react"
import { useSelector } from "react-redux"
import ContainerMenu from "./containerMenu/ContainerMenu"
import FullCard from "./fullCard/FullCard"

import HeaderMenu from "./headerMenu/HeaderMenu"

import './style.scss'

const filterPartners = (searchText, filter, technology, listOfPartners) => {
  
    const filteredPartners = listOfPartners.filter(obj => obj.technology === technology);
    console.log(filteredPartners)
  
    if(filter === 'All' && !searchText){
      return filteredPartners
    }
  
    if (!searchText) {
      return filteredPartners.filter(({ chapter }) =>
      chapter.toLowerCase().includes(filter.toLowerCase())
      )
    }
  
    return filteredPartners.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    )
  }

const Menu = () => {

    const storeSection = useSelector(state => state.section.section)

    const [menuListFiltered, setMenuListFiltered] = useState('');


    return (
        <div className="menu limitWidthSecond ">
            <HeaderMenu />
             <ContainerMenu section={storeSection} filteredMenu={menuListFiltered}/>
        </div>
    )
}

export default Menu
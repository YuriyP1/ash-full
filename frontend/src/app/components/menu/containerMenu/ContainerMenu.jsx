import { useSelector } from 'react-redux'
import CardMenu from '../../cardMenu/CardMenu'
import './style.scss'

const ContainerMenu = ({ section, filter, menuListFiltered = '' }) => {

    const menuList = useSelector(store => store.list.menu)

    return (
        <div className="ContainerMenu">
            {   
                menuList.map((item, _index)=>{
                        return <CardMenu key={item.id + _index}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            weight={item.weight}
                            amount={item.amount}
                            number={item.number}
                            contain={item.contain}
                            id={item.id}
                        />
                })
            }
        </div>
    )
}

export default ContainerMenu
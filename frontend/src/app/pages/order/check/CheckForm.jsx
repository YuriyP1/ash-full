import { useSelector } from 'react-redux'
import './style.scss'
import AsideBarCard from '../../../components/asideBar/asideBarCard/AsideBarCard'

export default function CheckForm () {
console.log('check')
const store = useSelector(state => state)

console.log(store.store.sum)
    return (
        <div className="checkForm">
            <div className='checkForm-title'>
                <h1>Чек</h1>
            </div>
            <div className="checkForm-container">
            {
                    store.store.store.map((item, _index)=>{
                        return <div className='checkForm-position'
                                key={item.id + Math.random()}
                            >
                            <div className="checkForm-position__number">
                                {_index+1}.&nbsp;
                            </div>
                            <div className="checkForm-position__title">
                                {item.title} &nbsp;
                            </div>
                            <div className="checkForm-position__amount">
                                {item.amount}x{item.price} грн
                            </div>
                            <div className="checkForm-position__price">
                                {item.price * item.amount} грн
                            </div>
                        </div>
                    })
                }
                <div className="checkForm__sum">
                    <h3>Сума: {store.store.sum} грн</h3>
                </div>
            </div>
        </div>
    )
} 
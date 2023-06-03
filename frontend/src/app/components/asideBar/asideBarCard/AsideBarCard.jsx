import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Icons from '../../../assets/icons/Icons'
import './style.scss'

const AsideBarCard = ({ image, title, price, description, weight, amount, id }) =>{

    // const store = useSelector(state => state.store)
    // console.log(store)

    const position = {
        title,
        amount,
        weight,
        price,
        image,
        id
    }

    const dispatch = useDispatch()

    const addPosition = () => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }
    const removePosition = () => {
        dispatch({ type: 'REMOVE_POSITION', position: position })
    }
    return(
        <div className='asideBarCard'>
            <div className="asideBarCard-imageWrap">
                <img src={image} alt="image" />
            </div>
            <div className="asideBarCard-content">
                <div className="asideBarCard-title">
                    <div className="asideBarCard-titleAndDescription-title">
                        {title}
                    </div>
                </div>
                <div className="asideBarCard-content__controls">
                        <div className="asideBarCard-content__controls-minus center"
                            onClick={removePosition}
                        >
                            -
                        </div>
                        <div className="asideBarCard-content__controls-count">
                            {amount}
                        </div>
                        <div className="asideBarCard-content__controls-plus center"
                            onClick={addPosition}
                        >
                            +
                        </div>
                </div> 
                <div className="asideBarCard-content__amount">
                    {amount} <span>шт</span> {weight} <span>грам</span>
                </div>
                {/* <div className="asideBarCard-props-container">
                    <div className="asideBarCard-props-container__controls">

                    </div>
                    <div className="asideBarCard-props-container__weight">
                        {weight} <span>грм</span>
                    </div>
                    <div className="asideBarCard-props-container__amount">
                        {amount} <span>шт</span>
                    </div>
                </div> */}
                {/* <div className="asideBarCard-remove center" onClick={()=>{}}>
                    r
                </div> */}
            </div>
        </div>
    )
}

export default AsideBarCard
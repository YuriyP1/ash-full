import { useRef, useState } from 'react'
import menu from '../../../../assets/menu/menu.json'

import './style.scss'
import { useDispatch } from 'react-redux'
import { SERVER_ADRESS } from '../../../../serverAdress'

const FullCard = ({cardId}) => {

    let card 

    menu.menu.map((position, _index)=>{
        if(position.id === cardId){
            card = position
            console.log(card.image)
        }
    })

    const dispatch = useDispatch()

    const addPosition = (position) => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }

    return (
        <div className="fullCard limitWidthSecond">
            <div className="fullCard-container">
                <div className='fullCard-imageWrap'>
                    <img src={`${SERVER_ADRESS}/${card.image}`} alt="icon" />
                </div>
                <div className='fullCard-content'>
                    <div className="fullCard-content__title">
                        <h1>{card.title}</h1>
                    </div>
                    <div className="fullCard-content__underTitle">
                        <span>{card.number && <>{card.number}</>} шт </span>
                        {/* <br /> */}
                        <span>{card.weight && <>{card.weight}</>} гр </span>
                    </div>
                    <div className="fullCard-ingredients">
                        {/* <p className='center'>ІНГРЕДІЄНТИ</p> */}
                        {
                            card.contain?.map((item, _index)=>(
                                <div className="ingredient" key={item}>
                                    <p>
                                        {item}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="fullCard-content__description">
                        <p>{card.description}</p>
                    </div>
                    <div className='fullCard-content-btnAndPrice'>
                        <div className="fullCard-content__btn"
                            onClick={()=>{addPosition(card)}}
                        >
                            У КОШИК
                        </div>
                        <p>{card.price} <span>&nbsp;грн</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullCard
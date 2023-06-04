import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useRoutes } from 'react-router-dom'
import ProductCard from '../../pages/productCard/ProductCard';
import './style.scss'

const routes = [
    {
      path: '/product/:id',
      element: <ProductCard />,
    },
  ];

const CardMenu = ({ image, title, price, contain, description, weight, number, amount, id}) =>{

    const position = {
        title,
        amount,
        number,
        weight,
        contain,
        price,
        image,
        id
    }

    useEffect(()=>{
        // document.querySelector('.cardMenu button').addEventListener('click', function(event) {
        //     event.preventDefault();
        //   });          
    }, [])
    const dispatch = useDispatch()

    const addPosition = (position) => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }

    const routing = useRoutes(routes);

    return(
        <div className="cardMenu" key={title + id}>
            <div className="cardMenu-imageWrap"
                
                // onClick={()=>{setFullCard(id)}}
            >
                <Link to={`/product/${id}`}>
                    <img src={image} alt="image" />
                </Link>
            </div>
            <div className="cardMenu-content">
                <div className="cardMenu-titleAndDescription">
                    <div className="cardMenu-titleAndDescription-title"
                    >
                        <Link to={`/product/${id}`}>
                            {title}
                        </Link>
                    </div> 
                    <div className="cardMenu-titleAndDescription-description">
                        {contain?.map((item, _i)=>(
                            <span key={_i + item}>{item},&nbsp;</span>
                        ))}
                    </div> 
                </div>
                <div className="cardMenu-props-container">
                    <div className="cardMenu-props-container__weight">
                        {weight} <span>грм</span>
                    </div>
                    <div className="cardMenu-props-container__amount">
                        {number} <span>шт</span>
                    </div>
                </div>
                <div className='cardMenu-btnAndPrice'>
                    <div className="cardMenu-btn" onClick={()=>{addPosition(position)}}>
                        У КОШИК
                    </div>
                    <div className="cardMenu-price center">
                        {price} <span>&nbsp;грн</span>
                    </div>
                </div>
            </div>
            {routing}
        </div>
    )
}

export default CardMenu
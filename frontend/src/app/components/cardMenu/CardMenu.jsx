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
    console.log(id, 'id')

    const dispatch = useDispatch()

    const addPosition = (position) => {
        dispatch({ type: 'ADD_POSITION', position: position })
    }

    const routing = useRoutes(routes);

    return(
        <Link to={`/product/${id}`} className="cardMenu" key={title}>
            <div className="cardMenu-imageWrap"
                
                // onClick={()=>{setFullCard(id)}}
            >
                <img src={image} alt="image" />
            </div>
            <div className="cardMenu-content">
                <div className="cardMenu-titleAndDescription">
                    <div className="cardMenu-titleAndDescription-title"
                    >
                        {title}
                    </div> 
                    <div className="cardMenu-titleAndDescription-description">
                        {contain?.map((item, _i)=>(
                            <span>{item},&nbsp;</span>
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
        </Link>
    )
}

export default CardMenu
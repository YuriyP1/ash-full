

import Banner from '../../components/banner/Banner'
import './style.scss'

export default function Delivery () {

    return (
        <div className="delivery backgoundInner limitWidthSecond">
            <div className="delivery-title">
                <h2>Способи доставки</h2>
            </div>
            <div className="delivery-paragraph">
                <h3>- доставка кур'єром</h3>
                <h3>- самовивіз</h3>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import Icons from "../../../assets/icons/Icons"
import { openCloseMenu, setSection } from "../header/Header"
import "./style.scss"
export default function FullMenu ({isActive}) {
    return (
        <div className={`fullMenu ${isActive ? 'active': ''}`}>
            <Icons icon={'logo'}/>
            <h2>MENU</h2>

            <Link to="/" onClick={()=>{setSection("РОЛИ")}}>РОЛИ</Link>
            <Link to="/" onClick={()=>{setSection("СУШІ")}}>СУШІ</Link>
            <Link to="/" onClick={()=>{setSection("СЕТИ")}}>СЕТИ</Link>
            <h2>О НАС</h2>
            <Link to="/delivery">
                ДОСТАВКА
            </Link>
            <h4>
                ПРАЦЮЄМО<br />
                З 9:00 по 22:00<br /><br />
                <h3>050 456-00-05</h3>
            </h4>
            <div class="close-button" onClick={openCloseMenu}> 
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    )
}
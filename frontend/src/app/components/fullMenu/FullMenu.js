import { Link } from "react-router-dom"
import Icons from "../../../assets/icons/Icons"
import { openCloseMenu, setSection } from "../header/Header"
import "./style.scss"

export default function FullMenu ({isActive}) {

    const delay = (string) => {
        setTimeout(()=>{
            setSection(string)
        },100)
    }
    return (
        <div className={`fullMenu ${isActive ? 'active': ''}`}>
            <Icons icon={'logo'}/>
            <h2>MENU</h2>

            <Link to="/" onClick={()=>{setSection("РОЛИ")}}>РОЛИ</Link>
            <Link to="/" onClick={()=>{setSection("СУШІ")}}>СУШІ</Link>
            <Link to="/" onClick={()=>{setSection("СЕТИ")}}>СЕТИ</Link>
            <h2>О НАС</h2>
            <Link to="/delivery" onClick={()=>{setSection("")}}>
                ДОСТАВКА
            </Link>
            <h3>
                ПРАЦЮЄМО<br />
                З 9:00 по 22:00<br /><br />
                050 456-00-05
            </h3>
            <div className="close-button" onClick={openCloseMenu}> 
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}
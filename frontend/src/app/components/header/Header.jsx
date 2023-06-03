import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icons from '../../../assets/icons/Icons'
import useWindowSize from '../../hook/resizeWindow'
import { Link } from 'react-router-dom'

import './style.scss'
import phoneTooltip from '../phoneTooltip'

const Header = ({ asideBar }) =>{

    const windowSize = useWindowSize()
    const header = useRef()
    const [style, setStyle] = useState(false)
    const [isFullMenu, setFullMenu] = useState(false)
    const [isPhoneToolTip, setPhoneToolTip] = useState()
    const count = useSelector(state => state.store.count)
  
    useEffect(()=>{
        window.addEventListener('scroll', function(e) {
            window.scrollY <= 30 ? setStyle(false) :  setStyle(true)
          });
    },[])


    const dispatch = useDispatch()

    const setSection = (section) => {
        // disposeFullCar(null)
        if(isFullMenu){
            setFullMenu(false)
        }
        switch (section){
            case 'ПІЦА': dispatch({ type: 'SET_SECTION', section: 'pizza' })
                break
            case 'РОЛИ': dispatch({ type: 'SET_SECTION', section: 'roll' })
                break
            case 'СУШІ': dispatch({ type: 'SET_SECTION', section: 'sushi' })
                break
            case 'СЕТИ': dispatch({ type: 'SET_SECTION', section: 'set' })
                break
            case 'БУРГЕРИ': dispatch({ type: 'SET_SECTION', section: 'burgers' })
                break
        }
        // setActive(section)
    }

    const openPhoneTooltip = () => {
        phoneTooltip()
    }

    return(
        <div className={`header limitWidthHeader fix ${style ? 'bg' : null}`}
            ref={header}    
        >
            <div className="header-content">
                {
                    windowSize.width < 1180 &&
                    <div className="header-content-mobNav"
                        onClick={()=>{ isFullMenu ? setFullMenu(false) : setFullMenu(true)}}
                    >
                        <div className="header-content-mobNav__line"></div>
                        <div className="header-content-mobNav__line"></div>
                        {/* <div className="header-content-mobNav__line"></div> */}
                        <div className="header-content-mobNav__line"></div>
                    </div>
                }
                {
                    isFullMenu && 
                    <div className="header-content-fullMenu">
                        <h2>MENU</h2>
                        <p onClick={()=>{setSection("РОЛИ")}}>РОЛИ</p>
                        <p onClick={()=>{setSection("СУШІ")}}>СУШІ</p>
                        <p onClick={()=>{setSection("СЕТИ")}}>СЕТИ</p>
                        <h2>MENU</h2>
                    </div>
                }
                <Link to='' className="header-content-logo center">
                    ASH
                </Link>
                {
                    windowSize.width > 1180 &&
                    <nav className='header-content-nav'>
                        <ul>
                            <li><Link to={'/delivery'}>ДОСТАВКА</Link></li>
                            <li>О НАС</li>
                            <li>О НАС</li>
                        </ul>
                    </nav>
                }
                {
                    windowSize.width > 1180 ? <div className='header-content-phone center'>
                    +380 (050) 687-59-30
                    </div>
                    :
                    <div className='header-content-phone center'
                        onClick={openPhoneTooltip}
                    >
                        <Icons icon='phone'/>
                    </div>
                }
                <div className="header-content-basket center"
                    onClick={asideBar}
                >
                    <Icons icon='basket' style={{position: 'absolute'}}/>
                    <div className="header-content-basket__count">
                        {count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icons from '../../../assets/icons/Icons'
import useWindowSize from '../../hook/resizeWindow'
import { Link } from 'react-router-dom'

import './style.scss'
import phoneTooltip, { disposePhoneTooltip } from '../phoneTooltip'
import FullMenu from '../fullMenu/FullMenu'

export let setSection
export let openCloseMenu
const Header = ({ asideBar }) =>{

    const windowSize = useWindowSize()
    const header = useRef()
    const [style, setStyle] = useState(false)
    const [isFullMenu, setFullMenu] = useState(false)
    const [isPhoneToolTip, setPhoneToolTip] = useState(false)
    const count = useSelector(state => state.store.count)

    const countRef = useRef()
    
    openCloseMenu = () => {
        if(isFullMenu){
            setFullMenu(false)
        }
        else {
            setFullMenu(true)
        }
    }

    useEffect(()=>{
        countRef.current.style.animation = "countAnimation 1s forwards"
        setTimeout(()=>{
            countRef.current.style.animation = ""
        }, 1000)
    }, [count])
  
    useEffect(()=>{
        window.addEventListener('scroll', function(e) {
            window.scrollY <= 30 ? setStyle(false) :  setStyle(true)
          });
    },[])


    const dispatch = useDispatch()
    const closeMenu = () => {
       
    }

    setSection = (section) => {
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
        setPhoneToolTip(!isPhoneToolTip)
        if(!isPhoneToolTip){
            phoneTooltip()
        } else {
            disposePhoneTooltip()
        }
    }

    return(
        <>
                    <div className={`header limitWidthHeader fix ${style ? 'bg' : ''}`}
            ref={header}    
        >
            <div className="header-content">
                {
                    windowSize.width < 1180 &&
                    <div className="header-content-mobNav"
                        onClick={openCloseMenu}
                    >
                        <div className="header-content-mobNav__line"></div>
                        <div className="header-content-mobNav__line"></div>
                        {/* <div className="header-content-mobNav__line"></div> */}
                        <div className="header-content-mobNav__line"></div>
                    </div>
                }
                <Link to='' className="header-content-logo center">
                    <Icons icon={'logo'}/>
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
                    <div ref={countRef} className="header-content-basket__count">
                        {count}
                    </div>
                </div>
            </div>
        </div>
        <FullMenu isActive={isFullMenu}/>
        </>

    )
}

export default Header
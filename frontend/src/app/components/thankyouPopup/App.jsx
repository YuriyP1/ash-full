import { useEffect, useRef } from 'react'

import './style.scss'

const AsideBar = ({ dispose, text }) =>{

    const finalRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            finalRef.current.style.animation = 'fade-out-tolltip-thanks 1s forwards'
            setTimeout(()=>{
                dispose()
            }, 2000)
        }, 4000)
    },[])

    return(
        <div ref={finalRef} className="thank-you-page">{text}</div>
    )
}

export default AsideBar
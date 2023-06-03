
import basket from './allIcons/basket.svg'
import phoneIcon from './allIcons/phoneIcon.png'

const Icons = ({icon}) =>{

    switch(icon){
        case 'basket':
            return <img src={basket} alt="icon" />
        case 'phone':
            return <img src={phoneIcon} alt="icon" />
    }

}

export default Icons

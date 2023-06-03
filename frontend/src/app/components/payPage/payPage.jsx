import { useRef, useState } from 'react'

const payPage = ({disposeFullCard}) => {

    const window = useWindowSize()
    const input = useRef()


    const [active, setActive] = useState(items[0].title)

    // const dispatch = useDispatch()

    return (
        <div className="payPage">
        Оплфта на сайте
        </div>
    )
}

export default payPage
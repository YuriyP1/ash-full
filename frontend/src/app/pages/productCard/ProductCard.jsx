import { useParams } from "react-router-dom";
import FullCard from "../../components/menu/fullCard/FullCard";
import HeaderMenu from "../../components/menu/headerMenu/HeaderMenu";

export default function ProductCard () {
    const { id } = useParams();
    console.log(id, 'params')
    return (
        <div className="menu limitWidthSecond">
            <HeaderMenu />
            <FullCard cardId={id}/>
        </div>
    )
}
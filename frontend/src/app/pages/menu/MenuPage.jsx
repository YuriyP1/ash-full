import { useState } from "react";
import AsideBar from "../../components/asideBar/App";
import Background from "../../components/background/Background";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";


export default function MenuPage () {

    return (
        <div className="menuPage">
           <Banner />
           <Menu   />
        </div>
    )
}
import { useState } from "react";
import AsideBar from "../../components/asideBar/App";
import Background from "../../components/background/Background";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import ContactForm from "./contactForm/ContactForm";
import CheckForm from "./check/CheckForm";

import './style.scss'

export default function OrderPage () {

    return (
        <div className="orederPage backgoundInner limitWidthSecond">
            <ContactForm />
            <CheckForm />
        </div>
    )
}
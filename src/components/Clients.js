import { useLayoutEffect } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import BornoImg from "../assets/images/clients/borno-state-gov.svg"
import CbnImg from "../assets/images/clients/cbnlogo.svg"
import ConnakImg from "../assets/images/clients/connak.svg"
import DunamisImg from "../assets/images/clients/dunamis.svg"
import EcowasImg from "../assets/images/clients/ecowas.svg"
import EmekaImg from "../assets/images/clients/emeka-offor-foundation.svg"
import HudayyaImg from "../assets/images/clients/hudayya.svg"
import KanoImg from "../assets/images/clients/kano-emirate.svg"
import KatsinaImg from "../assets/images/clients/katsina-gov.svg"
import KebbiImg from "../assets/images/clients/kebbi-state-gov.svg"
import LuxuryImg from "../assets/images/clients/luxury-livelihood.svg"
import NnpcImg from "../assets/images/clients/nnpc-logo.svg"
import No1HotelImg from "../assets/images/clients/no1-hotel.svg"
import NtdcImg from "../assets/images/clients/ntdc.svg"
import PresidentLogoImg from "../assets/images/clients/Seal_of_the_President_of_Nigeria.svg"
import SignatureBankImg from "../assets/images/clients/signature-bank.svg"
import StanelImg from "../assets/images/clients/stanel.svg"
import SwaSportImg from "../assets/images/clients/swasports.svg"
import ZmsgImg from "../assets/images/clients/ZMSG.svg"
import Logo from "../assets/images/Hawthorn Studios Yellow.png"



const Clients = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="clients">
            <Navbar />
            <div className="clients-container">
                <header>
                    <div className="hero-section"></div>
                    <h2>our clients</h2>
                </header>
                <main>
                    <p className="client-body">
                        At Hawthorn Media, Our clients are the most important entities, we believe in delivering excellent services that cater for our customers need, here by giving them satisfaction and value for their money and we're proud to have had the opportunity to work with such a distinguished roster of clients, providing value, excellence and luxury, this has helped us to  develop good relationship with our esteemed customers and we look forward to serving them better and also ensure that the continuity of our excellent service delivery remains our focus.
                    </p>
                    <div className="clients-img">
                        <img src={SignatureBankImg} alt="" />
                        <img src={StanelImg} alt="" />
                        <img src={EmekaImg} alt="" />
                        <img src={PresidentLogoImg} alt="" />
                        <img src={ZmsgImg} alt="" />
                        <img src={BornoImg} alt="" />
                        <img src={HudayyaImg} alt="" />
                        <img src={KatsinaImg} alt="" />
                        <img src={KebbiImg} alt="" />
                        <img src={KanoImg} alt="" />
                        <img src={ConnakImg} alt="" />
                        <img src={DunamisImg} alt="" />
                        <img src={LuxuryImg} alt="" />
                        <img src={CbnImg} alt="" />
                        <img src={NtdcImg} alt="" />
                        <img src={NnpcImg} alt="" />
                        <img src={No1HotelImg} alt="" />
                        <img src={SwaSportImg} alt="" />
                        <img src={EcowasImg} alt="" />
                    </div>
                    <div className="client-footer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111" fillOpacity="1" d="M0,0L80,5.3C160,11,320,21,480,53.3C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                        <img src={Logo} alt="" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Clients
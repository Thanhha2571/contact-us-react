import "./Header.css"
import MenuFooter from "./MenuFooter"
import Button from "./Button"
import { useState } from "react"
const Footer = () => {
    const MenuFooterList = [
        {
            id: 1,
            subMenu: [
                {
                    title: "Consultancy"
                },
                {
                    title: "Development services"
                },
                {
                    title: "Platform experts"
                },
                {
                    title: "New Technologies"
                },
                {
                    title: "By Industries"
                },
            ]
        },
        {
            id: 2,
            subMenu: [
                {
                    title: "contact"
                },
                {
                    title: "Case studies"
                },
                {
                    title: "Insights"
                },
            ]
        },


    ]
    const [color, setColor] = useState(false)
    const handleOnMouseOver = () => {
        setColor(true)
    }

    const handleOnMouseLeave = () => {
        setColor(false)   
    }
    return (
        <div className="footer">
            <div className="Frame-1000001756">
                <div className="Frame-1000001752"></div>
                <div className="footer-text">@ 2023 AHT TECH</div>
            </div>
            <div className="Frame-1000001757">
                <div className="Frame-1000001753">
                    <div className="sub-footer-brand"></div>
                    <div className="Frame-1000001753-text">Gain a competitive edge in commerce by partnering with a
                        world-leading digital commerce agency</div>
                    {/* <div className="get-in-touch-btn">
                        <span className="btn">Get in touch</span>
                        <div className="icon">
                            <img className="arrow-right" src="./image/Vector.png" />
                        </div>
                    </div> */}
                    <Button id = "get-in-touch" title="Get in Touch"  onMouseOver = {handleOnMouseOver} onMouseLeave= {handleOnMouseLeave} color={color}/>
                </div>
                <div className="Frame-1000001755">
                    <div className="Frame-1000001754">
                        {MenuFooterList.map(({ id, subMenu }) => <MenuFooter id={id} subMenu={subMenu} />)}
                        {/* <div class="sub-menu-1">
                            <div class="service-1">Consultancy</div>
                            <div class="service-1">Development services</div>
                            <div class="service-1">Platform experts</div>
                            <div class="service-1">New Technologies</div>
                            <div class="service-1">By Industries</div>
                        </div>
                        <div class="sub-menu-2">
                            <div class="service-2">contact</div>
                            <div class="service-2">Case studies</div>
                            <div class="service-2">Insights</div>
                        </div> */}
                    </div>
                    <div class="social">
                        <div class="social-icon-facebook"></div>
                        <div class="social-icon-youtube"></div>
                        <div class="social-icon-twitter"></div>
                        <div class="social-icon-instagram"></div>
                        {/* <img class="social-icon" src="./image/facebook.png" />
                        <img class="social-icon" src="./image/facebook.png" />
                        <img class="social-icon" src="./image/twitter.png" />
                        <img class="social-icon" src="./image/instagram.png" /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
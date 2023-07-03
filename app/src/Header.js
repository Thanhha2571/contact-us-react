import './Header.css'
import MenuList from './MenuList'
import SubMenu from './SubMenu'
import Button from './Button'
import { useState } from 'react'
const Header = (props) => {
    const { isOpenBanner, isOpenSubMenu, setIsOpenSubMenu, handleMenuOpen } = props
    const ListMenu = [
        {
            id: 'menu-services',
            name: 'Services',
            className: 'menu-services-text',
            subMenu: [
                {
                    id: 'services-1',
                    subMenu: [
                        {
                            id: 'consultancy',
                            title: 'Consultancy',
                            subMenu: [
                                {
                                    item: 'Technology Consulting',
                                },
                                {
                                    item: 'Customer Experience Consulting',
                                },
                                {
                                    item: 'Solution Architect Consulting',
                                }
                            ]
                        },
                        {
                            id: 'dedicated',
                            title: 'Dedicated Development Team',
                            subMenu: [
                                {
                                    item: 'Full stack developers for hire',
                                },
                                {
                                    item: 'Offshore development center',
                                }
                            ]
                        }
                    ]

                },
                {
                    id: 'services-2',
                    subMenu: [
                        {
                            id: 'platform',
                            title: 'Platform Experts',
                            subMenu: [
                                {
                                    item: 'Oddo',
                                },
                                {
                                    item: 'Salesforce',
                                },
                                {
                                    item: 'Magento',
                                },
                                {
                                    item: 'Shopify',
                                },
                                {
                                    item: 'Liferay',
                                },
                                {
                                    item: 'Acumatica',
                                },
                                {
                                    item: 'Bigcommerce'
                                }
                            ]
                        },
                    ]
                },

                {
                    id: 'services-3',
                    subMenu: [
                        {
                            id: 'development',
                            title: 'Development Services',
                            subMenu: [
                                {
                                    item: 'eCommerce Developmnet',
                                },
                                {
                                    item: 'Web App Development',
                                },
                                {
                                    item: 'Mobile App Development',
                                },
                                {
                                    item: 'SaaS Product Development',
                                },
                                {
                                    item: 'System Integration & Migration',
                                },
                                {
                                    item: 'DevOps Services',
                                },
                                {
                                    item: 'Creative Design'
                                },
                                {
                                    item: 'SEO Services',
                                },
                            ]
                        },
                    ]
                },
            ]
        },

        {
            id: 'menu-industries',
            name: 'Industries',
            className: 'menu-industries-text',
            subMenu: [
                {
                    id: 'industries-1',
                    subMenu: [
                        {
                            id: 'technology',
                            title: 'New Technologies',
                            subMenu: [
                                {
                                    item: 'ARTIFICIAL INTELLIGENCE',
                                },
                                {
                                    item: 'Iot',
                                },
                                {
                                    item: 'Blockchain',
                                },
                                {
                                    item: 'Cloud Computing'
                                }
                            ]
                        },
                    ]

                },
                {
                    id: 'industries-2',
                    subMenu: [
                        {
                            id: 'by',
                            title: 'By Industries',
                            subMenu: [
                                {
                                    item: 'TECHNOLOGY FOR STARTUPS',
                                },
                                {
                                    item: 'FINANCIAL & BANKING',
                                },
                                {
                                    item: 'RETAIL & ECOMMERCE',
                                },
                                {
                                    item: 'HEALTHCARE'
                                },
                                {
                                    item: 'MANUFACTURING'
                                }
                                ,
                                {
                                    item: 'IMPORT & DISTRIBUTION'
                                }
                            ]
                        },
                    ]

                },
            ]
        },

        {
            id: 'menu-case-studies',
            name: 'Case Studies',
            className: 'menu-case-studies-text',
        },
        {
            id: 'menu-insights',
            name: 'Insights',
            className: 'menu-insights-text',
        },
        {
            id: 'menu-company',
            name: 'Company',
            className: 'menu-company-text',
            subMenu: [
                {
                    id: 'company-1',
                    subMenu: [
                        {
                            id: 'company',
                            title: 'Company',
                            subMenu: [
                                {
                                    item: 'ABOUT US',
                                },
                                {
                                    item: 'CAREERS',
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 'company-2',
                    subMenu: [
                        {
                            id: 'ecosystems',
                            title: 'Ecosystems',
                            subMenu: [
                                {
                                    item: 'AHT JAPAN',
                                },
                                {
                                    item: 'OHIO DIGITAL',
                                },
                                {
                                    item: 'ONNET CONSULTING',
                                },
                                {
                                    item: 'HIGATE',
                                },
                                {
                                    item: 'AKDEMY'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
    ]

    // const [isOpenSubMenu, setIsOpenSubMenu] = useState(null);
    // const [isOpenBanner, setIsOpenBanner] = useState(true);
    // const handleMenu = (id) => {
    //     setIsOpenSubMenu(id);
    // }
    // const handleMenuOpen = (id) => {
    //     setIsOpenSubMenu(id);
    //     setIsOpenBanner(false)
    // }
    // const handleMenuClose = () => {
    //     setIsOpenSubMenu(null);
    //     setIsOpenBanner(true)

    // }
    const [color, setColor] = useState(false);
    const handleOnMouseOver = () => {
        setColor(true)
    }

    const handleOnMouseLeave = () => {
        setColor(false)
    }
    return (
        <div className="header">
            <div>xx
                {isOpenBanner && (
                    <div id="color"></div>
                )}
            </div>
            {/* <div id="color"></div> */}
            <div className="banner"></div>
            <div className="mega-menu">
                <nav id="nav">
                    <a id="banner-logo">
                        <div className="logo"></div>
                    </a>
                    <ul id="menu-list">
                        {ListMenu.map(({ id, name, className }) => <MenuList isOpenSubMenu={isOpenSubMenu} handleMenuOpen={handleMenuOpen} key={id} id={id} name={name} style={className} />)}
                        <li className="menu-global">
                            <a>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="#FCFCFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </li>

                        {/* <span className="contact-btn-text">contact us</span>
                            <div className="icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H1C0.447715 9 0 8.55229 0 8Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L13.5858 8L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893Z" fill="none"></path></svg>
                            </div> */}
                        <Button id="contact" title="Contact Us" onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} color={color} />
                    </ul>
                    <div className="background"></div>
                    <div id="menu-mobile">
                        <img className="menu-mobile-icon" src="./image/menu-mobile-icon.png" />
                    </div>
                </nav>
            </div>
            <div>
                {isOpenBanner && (
                    <div id="heading-and-supporting-text">
                        <span className="heading-banner">Contact Us</span>
                        <div className="heading-text">Lat's talk about your next project</div>
                    </div>
                )}
            </div>
            {/* <div id="heading-and-supporting-text">
                <span className="heading-banner">Contact Us</span>
                <div className="heading-text">Lat's talk about your next project</div>
            </div> */}
            <div>
                {ListMenu.map(({ subMenu, id }) => {
                    return (<SubMenu setIsOpenSubMenu={setIsOpenSubMenu} isOpenSubMenu={isOpenSubMenu} id={id} subMenu={subMenu} />)
                })}
            </div>

        </div>
    )
}
export default Header;